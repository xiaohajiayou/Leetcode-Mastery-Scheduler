// FSRS参数优化相关的API请求处理
export const optimizeFSRSParams = async (csvContent, onProgress) => {
    try {
        const formData = new FormData();
        const csvBlob = new Blob([csvContent], { type: 'text/csv' });
        // ref: https://github.com/ishiko732/fsrs-online-training/blob/73b3281e4c972bf965083dcfe61f087383b4a083/components/lib/tz.ts#L3-L4
        // Chrome > 24, Edge > 12, Firefox > 29
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
        formData.append('file', csvBlob, 'revlog.csv');
        formData.append('sse', '1');
        formData.append('hour_offset', '4');
        formData.append('enable_short_term', '0');
        formData.append('timezone', timeZone);

        const response = await fetch('https://ishiko732-fsrs-online-training.hf.space/api/train', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 手动解析SSE响应
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let result = null;
        let lastProgress = null;
        let doneParams = null;
        
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');
            
            // 处理SSE响应
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                
                // 处理事件类型
                if (line.startsWith('event: ')) {
                    const eventType = line.substring(7);
                    console.log('事件类型:', eventType);
                    
                    // 查找下一个data行
                    let dataLine = '';
                    for (let j = i + 1; j < lines.length; j++) {
                        if (lines[j].startsWith('data: ')) {
                            dataLine = lines[j];
                            break;
                        }
                    }
                    
                    if (dataLine) {
                        try {
                            const data = JSON.parse(dataLine.substring(6));
                            
                            // 处理进度信息
                            if (eventType === 'progress') {
                                lastProgress = data;
                                // 如果提供了进度回调函数，则调用它
                                if (onProgress) {
                                    onProgress(data);
                                }
                            }
                            
                            // 处理完成事件
                            if (eventType === 'done') {
                                doneParams = data;
                                console.log('捕获到done事件中的参数:', doneParams);
                            }
                            
                            // 处理训练结果
                            if (eventType === 'info' && data.type === 'Train') {
                                result = data;
                            }
                        } catch (e) {
                            console.warn('Error parsing SSE data:', e, dataLine);
                        }
                    }
                }
            }
        }
        
        // 优先返回done标签中的参数
        if (doneParams) {
            return doneParams;
        }
        
        // 如果没有获取到done参数，但有进度信息，则返回进度信息
        if (!result && lastProgress) {
            result = {
                type: 'Progress',
                progress: lastProgress
            };
        }
        
        return result || { type: 'Error', message: 'No result received' };
    } catch (error) {
        console.error('Error optimizing FSRS parameters:', error);
        throw error;
    }
}; 