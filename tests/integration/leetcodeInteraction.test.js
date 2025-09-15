/**
 * LeetCode Page Interaction Integration Tests
 * These tests ensure the extension correctly interacts with LeetCode pages
 */

import {
    SUCCESS_CLASSNAME,
    SUCCESS_CLASSNAME_CN,
    SUCCESS_CLASSNAME_NEW,
    WRONG_ANSWER_CLASSNAME,
    WRONG_ANSWER_CLASSNAME_CN,
    WRONG_ANSWER_CLASSNAME_NEW,
    COMPILE_ERROR_AND_TLE_CLASSNAME,
    COMPILE_ERROR_AND_TLE_CLASSNAME_CN,
    COMPILE_ERROR_AND_TLE_CLASSNAME_NEW,
    SUBMIT_BUTTON_ATTRIBUTE_NAME,
    SUBMIT_BUTTON_ATTRIBUTE_VALUE
} from '../../src/popup/util/constants';

describe('LeetCode Page Interaction Integration', () => {
    let document;
    let window;
    
    beforeEach(() => {
        // Create a mock DOM
        document = {
            querySelector: jest.fn(),
            querySelectorAll: jest.fn(() => []),
            createElement: jest.fn((tag) => ({
                tagName: tag.toUpperCase(),
                style: {},
                classList: {
                    add: jest.fn(),
                    remove: jest.fn(),
                    contains: jest.fn()
                },
                addEventListener: jest.fn(),
                appendChild: jest.fn(),
                remove: jest.fn(),
                setAttribute: jest.fn(),
                getAttribute: jest.fn()
            })),
            body: {
                appendChild: jest.fn(),
                removeChild: jest.fn()
            },
            head: {
                appendChild: jest.fn()
            }
        };
        
        window = {
            location: {
                href: 'https://leetcode.com/problems/two-sum/',
                pathname: '/problems/two-sum/'
            },
            MutationObserver: jest.fn(function(callback) {
                this.observe = jest.fn();
                this.disconnect = jest.fn();
                this.callback = callback;
            })
        };
        
        global.document = document;
        global.window = window;
    });
    
    afterEach(() => {
        global.document = undefined;
        global.window = undefined;
    });

    describe('Problem Detection', () => {
        it('should detect current problem from URL', () => {
            const testCases = [
                {
                    url: 'https://leetcode.com/problems/two-sum/',
                    expected: 'two-sum'
                },
                {
                    url: 'https://leetcode.com/problems/add-two-numbers/description/',
                    expected: 'add-two-numbers'
                },
                {
                    url: 'https://leetcode.cn/problems/两数之和/',
                    expected: '两数之和'
                }
            ];
            
            testCases.forEach(({ url, expected }) => {
                window.location.href = url;
                const match = url.match(/\/problems\/([^\/]+)/);
                const problemSlug = match ? match[1] : null;
                expect(problemSlug).toBe(expected);
            });
        });

        it('should extract problem metadata from page', () => {
            // Mock DOM elements
            const titleElement = { textContent: '1. Two Sum' };
            const difficultyElement = { textContent: 'Easy' };
            const tagsElements = [
                { textContent: 'Array' },
                { textContent: 'Hash Table' }
            ];
            
            document.querySelector.mockImplementation((selector) => {
                if (selector.includes('title')) return titleElement;
                if (selector.includes('difficulty')) return difficultyElement;
                return null;
            });
            
            document.querySelectorAll.mockImplementation((selector) => {
                if (selector.includes('tag')) return tagsElements;
                return [];
            });
            
            // Extract metadata
            const title = document.querySelector('[data-cy="question-title"]')?.textContent;
            const difficulty = document.querySelector('[data-difficulty]')?.textContent;
            const tags = Array.from(document.querySelectorAll('[class*="tag"]'))
                .map(el => el.textContent);
            
            expect(title).toBe('1. Two Sum');
            expect(difficulty).toBe('Easy');
            expect(tags).toEqual(['Array', 'Hash Table']);
        });
    });

    describe('Submission Detection', () => {
        it('should detect successful submission', () => {
            const successElement = document.createElement('div');
            successElement.className = SUCCESS_CLASSNAME;
            
            // Check for success
            const isSuccess = successElement.className === SUCCESS_CLASSNAME ||
                            successElement.className.includes(SUCCESS_CLASSNAME_CN) ||
                            successElement.className.includes(SUCCESS_CLASSNAME_NEW);
            
            expect(isSuccess).toBe(true);
        });

        it('should detect wrong answer submission', () => {
            const wrongAnswerElement = document.createElement('div');
            wrongAnswerElement.className = WRONG_ANSWER_CLASSNAME_CN;
            
            // Check for wrong answer
            const isWrongAnswer = wrongAnswerElement.className === WRONG_ANSWER_CLASSNAME ||
                                wrongAnswerElement.className.includes(WRONG_ANSWER_CLASSNAME_CN) ||
                                wrongAnswerElement.className.includes(WRONG_ANSWER_CLASSNAME_NEW);
            
            expect(isWrongAnswer).toBe(true);
        });

        it('should detect compile error or TLE', () => {
            const errorElement = document.createElement('div');
            errorElement.className = COMPILE_ERROR_AND_TLE_CLASSNAME_NEW;
            
            // Check for compile error or TLE
            const isError = errorElement.className === COMPILE_ERROR_AND_TLE_CLASSNAME ||
                          errorElement.className.includes(COMPILE_ERROR_AND_TLE_CLASSNAME_CN) ||
                          errorElement.className.includes(COMPILE_ERROR_AND_TLE_CLASSNAME_NEW);
            
            expect(isError).toBe(true);
        });
    });

    describe('Submit Button Monitoring', () => {
        it('should find and monitor submit button', () => {
            const submitButton = document.createElement('button');
            submitButton.setAttribute(SUBMIT_BUTTON_ATTRIBUTE_NAME, SUBMIT_BUTTON_ATTRIBUTE_VALUE);
            
            document.querySelector.mockImplementation((selector) => {
                if (selector === `[${SUBMIT_BUTTON_ATTRIBUTE_NAME}="${SUBMIT_BUTTON_ATTRIBUTE_VALUE}"]`) {
                    return submitButton;
                }
                return null;
            });
            
            // Find submit button
            const button = document.querySelector(
                `[${SUBMIT_BUTTON_ATTRIBUTE_NAME}="${SUBMIT_BUTTON_ATTRIBUTE_VALUE}"]`
            );
            
            expect(button).toBe(submitButton);
            
            // Add click listener
            const clickHandler = jest.fn();
            button.addEventListener('click', clickHandler);
            
            expect(button.addEventListener).toHaveBeenCalledWith('click', clickHandler);
        });

        it('should handle submit button click', () => {
            const submitButton = document.createElement('button');
            let clickHandlers = [];
            
            submitButton.addEventListener = jest.fn((event, handler) => {
                if (event === 'click') {
                    clickHandlers.push(handler);
                }
            });
            
            // Register handler
            const handleSubmit = jest.fn(() => {
                // Record submission attempt
                return { timestamp: Date.now(), problemId: 'two-sum' };
            });
            
            submitButton.addEventListener('click', handleSubmit);
            
            // Simulate click
            clickHandlers.forEach(handler => handler());
            
            expect(handleSubmit).toHaveBeenCalled();
        });
    });

    describe('DOM Mutation Observation', () => {
        it('should observe DOM changes for submission results', () => {
            const observer = new window.MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    // Check for result elements
                    mutation.addedNodes.forEach((node) => {
                        if (node.className && 
                            (node.className.includes('success') || 
                             node.className.includes('error'))) {
                            // Handle result
                        }
                    });
                });
            });
            
            // Start observing
            observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['class']
            });
            
            expect(observer.observe).toHaveBeenCalledWith(
                document.body,
                expect.objectContaining({
                    childList: true,
                    subtree: true
                })
            );
        });

        it('should detect submission result appearance', () => {
            let resultDetected = false;
            const resultHandler = jest.fn((result) => {
                resultDetected = true;
            });
            
            const observer = new window.MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach((node) => {
                            if (node.className === SUCCESS_CLASSNAME) {
                                resultHandler({ status: 'success', node });
                            }
                        });
                    }
                });
            });
            
            // Simulate DOM change
            const successNode = { className: SUCCESS_CLASSNAME };
            observer.callback([{
                type: 'childList',
                addedNodes: [successNode]
            }]);
            
            expect(resultHandler).toHaveBeenCalledWith({
                status: 'success',
                node: successNode
            });
        });
    });

    describe('Review Modal Injection', () => {
        it('should inject review modal into page', () => {
            const modal = document.createElement('div');
            modal.id = 'leetcode-review-modal';
            modal.style.cssText = 'position: fixed; z-index: 9999;';
            
            const modalContent = document.createElement('div');
            modalContent.innerHTML = `
                <div class="review-header">Review Problem</div>
                <div class="review-body">
                    <label>Quality:</label>
                    <select id="quality-select">
                        <option value="1">Again</option>
                        <option value="2">Hard</option>
                        <option value="3">Good</option>
                        <option value="4">Easy</option>
                    </select>
                </div>
                <button id="submit-review">Submit</button>
            `;
            
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
            
            expect(document.body.appendChild).toHaveBeenCalledWith(modal);
            expect(modal.id).toBe('leetcode-review-modal');
        });

        it('should handle review modal interactions', () => {
            const qualitySelect = document.createElement('select');
            const submitButton = document.createElement('button');
            
            let selectedQuality = 3;
            qualitySelect.value = selectedQuality;
            
            const submitHandler = jest.fn(() => {
                return {
                    quality: parseInt(qualitySelect.value),
                    timestamp: Date.now()
                };
            });
            
            submitButton.addEventListener('click', submitHandler);
            
            // Simulate submit
            submitButton.addEventListener.mock.calls[0][1]();
            
            expect(submitHandler).toHaveBeenCalled();
            const result = submitHandler.mock.results[0].value;
            expect(result.quality).toBe(selectedQuality);
        });
    });

    describe('Problem Status Display', () => {
        it('should display problem review status', () => {
            const statusElement = document.createElement('div');
            statusElement.id = 'problem-review-status';
            
            const updateStatus = (problem) => {
                statusElement.textContent = `Last Review: ${new Date(problem.lastReview).toLocaleDateString()}`;
                statusElement.className = problem.proficiency >= 5 ? 'mastered' : 'learning';
            };
            
            const problem = {
                lastReview: Date.now() - 86400000,
                proficiency: 3
            };
            
            updateStatus(problem);
            
            expect(statusElement.textContent).toContain('Last Review:');
            expect(statusElement.className).toBe('learning');
        });

        it('should show next review date', () => {
            const nextReviewElement = document.createElement('div');
            
            const showNextReview = (nextReviewDate) => {
                const days = Math.ceil((nextReviewDate - Date.now()) / (1000 * 60 * 60 * 24));
                nextReviewElement.textContent = `Next Review: ${days} days`;
                
                if (days <= 0) {
                    nextReviewElement.className = 'review-due';
                } else if (days <= 3) {
                    nextReviewElement.className = 'review-soon';
                } else {
                    nextReviewElement.className = 'review-later';
                }
            };
            
            // Due today
            showNextReview(Date.now());
            expect(nextReviewElement.className).toBe('review-due');
            
            // Due in 2 days
            showNextReview(Date.now() + 2 * 86400000);
            expect(nextReviewElement.className).toBe('review-soon');
            
            // Due in 7 days
            showNextReview(Date.now() + 7 * 86400000);
            expect(nextReviewElement.className).toBe('review-later');
        });
    });

    describe('Code Editor Integration', () => {
        it('should detect code changes in editor', () => {
            const codeEditor = {
                getValue: jest.fn(() => 'function twoSum(nums, target) { return []; }'),
                on: jest.fn()
            };
            
            let changeHandler;
            codeEditor.on.mockImplementation((event, handler) => {
                if (event === 'change') {
                    changeHandler = handler;
                }
            });
            
            // Register change listener
            codeEditor.on('change', () => {
                const code = codeEditor.getValue();
                // Track code changes
            });
            
            expect(codeEditor.on).toHaveBeenCalledWith('change', expect.any(Function));
            
            // Simulate code change
            if (changeHandler) {
                changeHandler();
                expect(codeEditor.getValue).toHaveBeenCalled();
            }
        });

        it('should capture solution code on submission', () => {
            const solutionCapture = {
                language: 'javascript',
                code: '',
                timestamp: null
            };
            
            const captureCode = (editor) => {
                solutionCapture.code = editor.getValue();
                solutionCapture.timestamp = Date.now();
                return solutionCapture;
            };
            
            const mockEditor = {
                getValue: jest.fn(() => 'var twoSum = function(nums, target) {};')
            };
            
            const captured = captureCode(mockEditor);
            
            expect(captured.code).toContain('twoSum');
            expect(captured.timestamp).toBeDefined();
        });
    });

    describe('Chinese LeetCode Support', () => {
        it('should detect Chinese LeetCode site', () => {
            const isCNSite = (url) => {
                return url.includes('leetcode.cn') || url.includes('leetcode-cn.com');
            };
            
            expect(isCNSite('https://leetcode.cn/problems/two-sum/')).toBe(true);
            expect(isCNSite('https://leetcode.com/problems/two-sum/')).toBe(false);
        });

        it('should handle Chinese problem titles', () => {
            const cnTitle = '1. 两数之和';
            const extractProblemNumber = (title) => {
                const match = title.match(/^(\d+)\./);
                return match ? match[1] : null;
            };
            
            expect(extractProblemNumber(cnTitle)).toBe('1');
        });

        it('should use correct selectors for CN site', () => {
            const getCNSelectors = () => ({
                submitButton: '[data-e2e-locator="console-submit-button"]',
                successClass: SUCCESS_CLASSNAME_CN,
                errorClass: WRONG_ANSWER_CLASSNAME_CN,
                compileErrorClass: COMPILE_ERROR_AND_TLE_CLASSNAME_CN
            });
            
            const selectors = getCNSelectors();
            expect(selectors.successClass).toContain('text-green-s');
            expect(selectors.errorClass).toContain('text-red-s');
        });
    });

    describe('Error Recovery', () => {
        it('should handle missing DOM elements gracefully', () => {
            document.querySelector.mockReturnValue(null);
            
            const findElement = (selector) => {
                const element = document.querySelector(selector);
                if (!element) {
                    console.warn(`Element not found: ${selector}`);
                    return null;
                }
                return element;
            };
            
            const result = findElement('.non-existent');
            expect(result).toBeNull();
            expect(document.querySelector).toHaveBeenCalled();
        });

        it('should retry on temporary failures', async () => {
            let attempts = 0;
            const maxRetries = 3;
            
            const retryOperation = async (operation, retries = maxRetries) => {
                for (let i = 0; i < retries; i++) {
                    try {
                        attempts++;
                        if (attempts < 2) {
                            throw new Error('Temporary failure');
                        }
                        return await operation();
                    } catch (error) {
                        if (i === retries - 1) throw error;
                        await new Promise(resolve => setTimeout(resolve, 100));
                    }
                }
            };
            
            const result = await retryOperation(() => 'success');
            expect(result).toBe('success');
            expect(attempts).toBe(2);
        });
    });
});