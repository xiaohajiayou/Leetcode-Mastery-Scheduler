/**
 * Chrome Extension Messaging Integration Tests
 * These tests ensure the messaging between background, content, and popup scripts works correctly
 */

describe('Chrome Extension Messaging Integration', () => {
    let mockSendMessage;
    let mockSendResponse;
    let mockOnMessage;
    let messageListeners = [];
    
    beforeEach(() => {
        jest.clearAllMocks();
        messageListeners = [];
        
        // Mock Chrome messaging API
        mockSendMessage = jest.fn((message) => {
            return Promise.resolve({ success: true, data: message });
        });
        
        mockSendResponse = jest.fn();
        
        mockOnMessage = {
            addListener: jest.fn((listener) => {
                messageListeners.push(listener);
            }),
            removeListener: jest.fn((listener) => {
                const index = messageListeners.indexOf(listener);
                if (index > -1) {
                    messageListeners.splice(index, 1);
                }
            })
        };
        
        // Set up Chrome API mocks
        global.chrome = {
            runtime: {
                sendMessage: mockSendMessage,
                onMessage: mockOnMessage,
                lastError: null
            },
            tabs: {
                query: jest.fn((query, callback) => {
                    callback([{ id: 1, url: 'https://leetcode.com/problems/two-sum/' }]);
                }),
                sendMessage: jest.fn((tabId, message, callback) => {
                    if (callback) {
                        callback({ success: true });
                    }
                })
            },
            storage: {
                local: {
                    get: jest.fn((keys, callback) => {
                        callback({ problems: {}, records: {} });
                    }),
                    set: jest.fn((data, callback) => {
                        if (callback) callback();
                    })
                },
                sync: {
                    get: jest.fn((keys, callback) => {
                        callback({ config: {} });
                    }),
                    set: jest.fn((data, callback) => {
                        if (callback) callback();
                    })
                }
            }
        };
    });
    
    afterEach(() => {
        global.chrome = undefined;
    });

    describe('Popup to Background Communication', () => {
        it('should send problem submission from popup to background', async () => {
            const problemData = {
                action: 'PROBLEM_SUBMITTED',
                data: {
                    index: '1',
                    name: 'Two Sum',
                    level: 'Easy',
                    url: 'https://leetcode.com/problems/two-sum/',
                    submissionTime: Date.now()
                }
            };
            
            // Send message from popup
            const response = await chrome.runtime.sendMessage(problemData);
            
            expect(mockSendMessage).toHaveBeenCalledWith(problemData);
            expect(response.success).toBe(true);
            expect(response.data).toEqual(problemData);
        });

        it('should request problem list from background', async () => {
            const request = {
                action: 'GET_PROBLEMS',
                filter: { proficiency: { min: 0, max: 3 } }
            };
            
            // Mock background response
            mockSendMessage.mockImplementation((message) => {
                if (message.action === 'GET_PROBLEMS') {
                    return Promise.resolve({
                        success: true,
                        problems: {
                            '1': { index: '1', name: 'Two Sum', proficiency: 2 },
                            '2': { index: '2', name: 'Add Two Numbers', proficiency: 1 }
                        }
                    });
                }
                return Promise.resolve({ success: true });
            });
            
            const response = await chrome.runtime.sendMessage(request);
            
            expect(response.success).toBe(true);
            expect(Object.keys(response.problems)).toHaveLength(2);
        });

        it('should handle sync trigger from popup', async () => {
            const syncRequest = {
                action: 'TRIGGER_SYNC',
                syncType: 'full'
            };
            
            await chrome.runtime.sendMessage(syncRequest);
            
            expect(mockSendMessage).toHaveBeenCalledWith(syncRequest);
        });
    });

    describe('Content Script to Background Communication', () => {
        it('should detect problem submission on LeetCode page', async () => {
            // Simulate content script detecting submission
            const submissionMessage = {
                action: 'SUBMISSION_DETECTED',
                data: {
                    problemId: '1',
                    status: 'Accepted',
                    runtime: '72ms',
                    memory: '42.1MB',
                    timestamp: Date.now()
                }
            };
            
            // Content script sends to background
            chrome.runtime.sendMessage(submissionMessage);
            
            expect(mockSendMessage).toHaveBeenCalledWith(submissionMessage);
        });

        it('should inject review modal into LeetCode page', async () => {
            const injectRequest = {
                action: 'INJECT_REVIEW_MODAL',
                problemId: '1'
            };
            
            // Background sends to content script
            await chrome.tabs.sendMessage(1, injectRequest, () => {});
            
            expect(chrome.tabs.sendMessage).toHaveBeenCalledWith(
                1,
                injectRequest,
                expect.any(Function)
            );
        });

        it('should handle problem data extraction', async () => {
            const extractRequest = {
                action: 'EXTRACT_PROBLEM_DATA'
            };
            
            // Mock content script response
            chrome.tabs.sendMessage.mockImplementation((tabId, message, callback) => {
                if (message.action === 'EXTRACT_PROBLEM_DATA') {
                    callback({
                        success: true,
                        data: {
                            title: 'Two Sum',
                            difficulty: 'Easy',
                            tags: ['Array', 'Hash Table'],
                            description: 'Given an array of integers...'
                        }
                    });
                }
            });
            
            const response = await new Promise((resolve) => {
                chrome.tabs.sendMessage(1, extractRequest, resolve);
            });
            
            expect(response.success).toBe(true);
            expect(response.data.title).toBe('Two Sum');
            expect(response.data.tags).toContain('Array');
        });
    });

    describe('Background Script Message Handling', () => {
        it('should handle multiple message types', () => {
            // Simulate background script message handler
            const messageHandler = (message, sender, sendResponse) => {
                switch (message.action) {
                    case 'GET_PROBLEMS':
                        sendResponse({ success: true, problems: {} });
                        break;
                    case 'SAVE_PROBLEM':
                        sendResponse({ success: true, saved: true });
                        break;
                    case 'GET_CONFIG':
                        sendResponse({ success: true, config: {} });
                        break;
                    default:
                        sendResponse({ success: false, error: 'Unknown action' });
                }
                return true; // Async response
            };
            
            // Register handler
            messageListeners.push(messageHandler);
            
            // Test different message types
            const messages = [
                { action: 'GET_PROBLEMS' },
                { action: 'SAVE_PROBLEM' },
                { action: 'GET_CONFIG' },
                { action: 'UNKNOWN_ACTION' }
            ];
            
            messages.forEach(msg => {
                const response = {};
                messageHandler(msg, {}, (resp) => Object.assign(response, resp));
                
                if (msg.action === 'UNKNOWN_ACTION') {
                    expect(response.success).toBe(false);
                    expect(response.error).toBe('Unknown action');
                } else {
                    expect(response.success).toBe(true);
                }
            });
        });

        it('should handle async operations in message handlers', async () => {
            const asyncHandler = async (message, sender, sendResponse) => {
                if (message.action === 'ASYNC_OPERATION') {
                    // Simulate async operation
                    await new Promise(resolve => setTimeout(resolve, 10));
                    sendResponse({ success: true, result: 'async complete' });
                }
                return true;
            };
            
            messageListeners.push(asyncHandler);
            
            const response = await new Promise((resolve) => {
                asyncHandler(
                    { action: 'ASYNC_OPERATION' },
                    {},
                    resolve
                );
            });
            
            expect(response.success).toBe(true);
            expect(response.result).toBe('async complete');
        });
    });

    describe('Tab Communication', () => {
        it('should communicate with active LeetCode tabs', async () => {
            // Mock tab query
            chrome.tabs.query.mockImplementation((query, callback) => {
                if (query.url && query.url.includes('leetcode.com')) {
                    callback([
                        { id: 1, url: 'https://leetcode.com/problems/two-sum/' },
                        { id: 2, url: 'https://leetcode.com/problems/add-two-numbers/' }
                    ]);
                } else {
                    callback([]);
                }
            });
            
            // Query LeetCode tabs
            const tabs = await new Promise((resolve) => {
                chrome.tabs.query({ url: '*://leetcode.com/*' }, resolve);
            });
            
            expect(tabs).toHaveLength(2);
            
            // Send message to all LeetCode tabs
            const broadcastMessage = { action: 'REFRESH_PROBLEM_STATUS' };
            tabs.forEach(tab => {
                chrome.tabs.sendMessage(tab.id, broadcastMessage);
            });
            
            expect(chrome.tabs.sendMessage).toHaveBeenCalledTimes(2);
        });

        it('should handle tab removal and creation', () => {
            const tabListeners = {
                onRemoved: [],
                onCreated: [],
                onUpdated: []
            };
            
            // Mock tab event listeners
            chrome.tabs.onRemoved = {
                addListener: (fn) => tabListeners.onRemoved.push(fn)
            };
            chrome.tabs.onCreated = {
                addListener: (fn) => tabListeners.onCreated.push(fn)
            };
            chrome.tabs.onUpdated = {
                addListener: (fn) => tabListeners.onUpdated.push(fn)
            };
            
            // Register listeners
            const onTabRemoved = jest.fn();
            const onTabCreated = jest.fn();
            const onTabUpdated = jest.fn();
            
            chrome.tabs.onRemoved.addListener(onTabRemoved);
            chrome.tabs.onCreated.addListener(onTabCreated);
            chrome.tabs.onUpdated.addListener(onTabUpdated);
            
            // Simulate tab events
            tabListeners.onCreated.forEach(fn => fn({ id: 3, url: 'https://leetcode.com' }));
            tabListeners.onUpdated.forEach(fn => fn(3, { status: 'complete' }, { id: 3 }));
            tabListeners.onRemoved.forEach(fn => fn(3, { isWindowClosing: false }));
            
            expect(onTabCreated).toHaveBeenCalled();
            expect(onTabUpdated).toHaveBeenCalled();
            expect(onTabRemoved).toHaveBeenCalled();
        });
    });

    describe('Error Handling in Messaging', () => {
        it('should handle sendMessage errors', async () => {
            chrome.runtime.lastError = { message: 'Could not establish connection' };
            mockSendMessage.mockRejectedValue(new Error('Connection failed'));
            
            try {
                await chrome.runtime.sendMessage({ action: 'TEST' });
            } catch (error) {
                expect(error.message).toBe('Connection failed');
            }
        });

        it('should handle missing sendResponse', () => {
            const handler = (message, sender, sendResponse) => {
                // Forgot to call sendResponse
                if (message.action === 'FORGET_RESPONSE') {
                    // Do nothing
                }
            };
            
            messageListeners.push(handler);
            
            // Should not throw
            expect(() => {
                handler({ action: 'FORGET_RESPONSE' }, {}, mockSendResponse);
            }).not.toThrow();
        });

        it('should handle invalid message formats', () => {
            const handler = (message, sender, sendResponse) => {
                if (!message || typeof message !== 'object') {
                    sendResponse({ success: false, error: 'Invalid message format' });
                    return;
                }
                
                if (!message.action) {
                    sendResponse({ success: false, error: 'Missing action' });
                    return;
                }
                
                sendResponse({ success: true });
            };
            
            const testCases = [
                null,
                undefined,
                'string message',
                123,
                {},
                { data: 'no action' }
            ];
            
            testCases.forEach(testCase => {
                const response = {};
                handler(testCase, {}, (resp) => Object.assign(response, resp));
                
                if (testCase && typeof testCase === 'object' && testCase.action) {
                    expect(response.success).toBe(true);
                } else {
                    expect(response.success).toBe(false);
                    expect(response.error).toBeDefined();
                }
            });
        });
    });

    describe('Message Broadcasting', () => {
        it('should broadcast state changes to all components', async () => {
            const stateUpdate = {
                action: 'STATE_UPDATED',
                state: {
                    problems: { '1': { proficiency: 3 } },
                    config: { syncEnabled: true }
                }
            };
            
            // Broadcast to popup
            chrome.runtime.sendMessage(stateUpdate);
            
            // Broadcast to all tabs
            const tabs = [{ id: 1 }, { id: 2 }];
            chrome.tabs.query.mockImplementation((query, callback) => callback(tabs));
            
            const allTabs = await new Promise(resolve => {
                chrome.tabs.query({}, resolve);
            });
            
            allTabs.forEach(tab => {
                chrome.tabs.sendMessage(tab.id, stateUpdate);
            });
            
            expect(chrome.tabs.sendMessage).toHaveBeenCalledTimes(2);
        });
    });

    describe('Connection Port Communication', () => {
        it('should establish long-lived connections', () => {
            const mockPort = {
                name: 'popup',
                postMessage: jest.fn(),
                onMessage: {
                    addListener: jest.fn()
                },
                onDisconnect: {
                    addListener: jest.fn()
                }
            };
            
            chrome.runtime.connect = jest.fn(() => mockPort);
            
            // Establish connection
            const port = chrome.runtime.connect({ name: 'popup' });
            
            expect(chrome.runtime.connect).toHaveBeenCalledWith({ name: 'popup' });
            expect(port.name).toBe('popup');
            
            // Send message through port
            port.postMessage({ action: 'HEARTBEAT' });
            expect(mockPort.postMessage).toHaveBeenCalledWith({ action: 'HEARTBEAT' });
        });
    });
});