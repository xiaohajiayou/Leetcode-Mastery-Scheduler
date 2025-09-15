/**
 * Notification Service
 * 管理所有通知和弹窗相关功能
 */

import Swal from 'sweetalert2';

/**
 * 显示成功提示
 */
export function showSuccess(title, text, options = {}) {
    return Swal.fire({
        icon: 'success',
        title: title,
        text: text,
        showConfirmButton: false,
        timer: options.timer || 1500,
        background: '#1d2e3d',
        color: '#ffffff',
        toast: options.toast !== false,
        position: options.position || 'center-end',
        customClass: {
            popup: 'colored-toast'
        },
        ...options
    });
}

/**
 * 显示错误提示
 */
export function showError(title, text, options = {}) {
    return Swal.fire({
        icon: 'error',
        title: title,
        text: text,
        background: '#1d2e3d',
        color: '#ffffff',
        confirmButtonColor: '#4a9d9c',
        ...options
    });
}

/**
 * 显示警告提示
 */
export function showWarning(title, text, options = {}) {
    return Swal.fire({
        icon: 'warning',
        title: title,
        text: text,
        background: '#1d2e3d',
        color: '#ffffff',
        confirmButtonColor: '#4a9d9c',
        ...options
    });
}

/**
 * 显示确认对话框
 */
export function showConfirm(title, text, options = {}) {
    return Swal.fire({
        title: title,
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4a9d9c',
        cancelButtonColor: '#d33',
        confirmButtonText: options.confirmButtonText || 'Yes',
        cancelButtonText: options.cancelButtonText || 'Cancel',
        background: '#1d2e3d',
        color: '#ffffff',
        ...options
    });
}

/**
 * 显示信息提示
 */
export function showInfo(title, text, options = {}) {
    return Swal.fire({
        icon: 'info',
        title: title,
        text: text,
        background: '#1d2e3d',
        color: '#ffffff',
        confirmButtonColor: '#4a9d9c',
        ...options
    });
}

/**
 * 显示自定义HTML内容的弹窗
 */
export function showModal(title, content, buttons = null) {
    const modalOptions = {
        title: title,
        html: content,
        background: '#1d2e3d',
        color: '#ffffff',
        confirmButtonColor: '#4a9d9c',
        width: '600px'
    };

    // 如果有自定义按钮，则使用自定义按钮
    if (buttons && Array.isArray(buttons)) {
        modalOptions.showConfirmButton = false;
        modalOptions.showCloseButton = true;
        modalOptions.html += `
            <div class="d-flex justify-content-end mt-3">
                ${buttons.map(btn => `
                    <button class="${btn.className} ms-2" id="modal-btn-${btn.text}">
                        ${btn.text}
                    </button>
                `).join('')}
            </div>
        `;

        // 使用SweetAlert2显示模态框
        Swal.fire(modalOptions);

        // 为每个按钮添加点击事件
        setTimeout(() => {
            buttons.forEach(btn => {
                const btnElement = document.getElementById(`modal-btn-${btn.text}`);
                if (btnElement && btn.onClick) {
                    btnElement.addEventListener('click', async (e) => {
                        e.preventDefault();
                        try {
                            // 执行按钮点击事件处理程序
                            await btn.onClick();
                            // 关闭弹窗
                            Swal.close();
                        } catch (error) {
                            console.error('按钮点击事件处理程序执行失败:', error);
                        }
                    });
                }
            });
        }, 100); // 添加一个小延迟确保DOM已更新
    } else {
        // 如果没有自定义按钮，则使用默认按钮
        modalOptions.showConfirmButton = true;
        modalOptions.confirmButtonText = '确定';

        // 使用SweetAlert2显示模态框
        return Swal.fire(modalOptions);
    }
}

/**
 * 显示带进度条的弹窗
 */
export function showProgress(title, text, options = {}) {
    return Swal.fire({
        title: title,
        html: text,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        background: '#1d2e3d',
        color: '#ffffff',
        didOpen: () => {
            Swal.showLoading();
        },
        ...options
    });
}

/**
 * 显示输入对话框
 */
export function showInput(title, options = {}) {
    return Swal.fire({
        title: title,
        input: options.input || 'text',
        inputLabel: options.inputLabel,
        inputPlaceholder: options.inputPlaceholder,
        inputValue: options.inputValue || '',
        showCancelButton: true,
        confirmButtonText: options.confirmButtonText || 'OK',
        cancelButtonText: options.cancelButtonText || 'Cancel',
        background: '#1d2e3d',
        color: '#ffffff',
        confirmButtonColor: '#4a9d9c',
        inputValidator: options.inputValidator,
        ...options
    });
}

/**
 * 显示选择对话框
 */
export function showSelect(title, inputOptions, options = {}) {
    return Swal.fire({
        title: title,
        input: 'select',
        inputOptions: inputOptions,
        inputPlaceholder: options.inputPlaceholder || 'Select an option',
        showCancelButton: true,
        confirmButtonText: options.confirmButtonText || 'Select',
        cancelButtonText: options.cancelButtonText || 'Cancel',
        background: '#1d2e3d',
        color: '#ffffff',
        confirmButtonColor: '#4a9d9c',
        inputValue: options.inputValue,
        ...options
    });
}

/**
 * 关闭当前弹窗
 */
export function closeModal() {
    Swal.close();
}

/**
 * 测试通知功能
 */
export async function testNotification() {
    try {
        const response = await chrome.runtime.sendMessage({ action: 'testNotification' });
        if (response && response.success) {
            // 显示成功反馈
            showSuccess('Test Successful', 'Check your desktop for the notification!', {
                timer: 2000,
                position: 'top-end'
            });
        } else {
            // 显示错误
            showError('Test Failed', response?.message || 'Could not send notification', {
                timer: 3000,
                toast: true,
                position: 'top-end'
            });
        }
    } catch (error) {
        console.error('Error sending test notification:', error);
        showError('Error', 'Failed to send test notification', {
            timer: 3000,
            toast: true,
            position: 'top-end'
        });
    }
}