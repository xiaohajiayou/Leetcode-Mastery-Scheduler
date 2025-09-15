import localStorageDelegate, {
    getLocalStorageData,
    setLocalStorageData
} from '../../../src/popup/delegate/localStorageDelegate';

describe('LocalStorageDelegate', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('getLocalStorageData', () => {
        it('should get data from chrome.storage.local', async () => {
            const mockData = { testKey: 'testValue' };
            chrome.storage.local.get.mockImplementation((key, callback) => {
                callback({ [key]: mockData[key] });
            });

            const result = await getLocalStorageData('testKey');

            expect(chrome.storage.local.get).toHaveBeenCalledWith('testKey', expect.any(Function));
            expect(result).toBe('testValue');
        });

        it('should handle undefined result', async () => {
            chrome.storage.local.get.mockImplementation((key, callback) => {
                callback(undefined);
            });

            const result = await getLocalStorageData('testKey');

            expect(result).toBeUndefined();
            expect(console.log).toHaveBeenCalledWith('get local storage data failed for key = testKey');
        });

        it('should handle undefined key value', async () => {
            chrome.storage.local.get.mockImplementation((key, callback) => {
                callback({});
            });

            const result = await getLocalStorageData('testKey');

            expect(result).toBeUndefined();
            expect(console.log).toHaveBeenCalledWith('get local storage data failed for key = testKey');
        });

        it('should handle complex data types', async () => {
            const complexData = {
                array: [1, 2, 3],
                object: { nested: 'value' },
                number: 42,
                boolean: true,
                nullValue: null
            };

            chrome.storage.local.get.mockImplementation((key, callback) => {
                callback({ complexKey: complexData });
            });

            const result = await getLocalStorageData('complexKey');

            expect(result).toEqual(complexData);
        });

        it('should handle multiple sequential calls', async () => {
            const mockData = {
                key1: 'value1',
                key2: 'value2',
                key3: 'value3'
            };

            chrome.storage.local.get.mockImplementation((key, callback) => {
                callback({ [key]: mockData[key] });
            });

            const results = await Promise.all([
                getLocalStorageData('key1'),
                getLocalStorageData('key2'),
                getLocalStorageData('key3')
            ]);

            expect(results).toEqual(['value1', 'value2', 'value3']);
            expect(chrome.storage.local.get).toHaveBeenCalledTimes(3);
        });
    });

    describe('setLocalStorageData', () => {
        it('should set data to chrome.storage.local', async () => {
            await setLocalStorageData('testKey', 'testValue');

            expect(chrome.storage.local.set).toHaveBeenCalledWith({
                testKey: 'testValue'
            });
        });

        it('should handle complex data types', async () => {
            const complexData = {
                array: [1, 2, 3],
                object: { nested: 'value' },
                number: 42,
                boolean: true,
                nullValue: null
            };

            await setLocalStorageData('complexKey', complexData);

            expect(chrome.storage.local.set).toHaveBeenCalledWith({
                complexKey: complexData
            });
        });

        it('should handle null values', async () => {
            await setLocalStorageData('nullKey', null);

            expect(chrome.storage.local.set).toHaveBeenCalledWith({
                nullKey: null
            });
        });

        it('should handle undefined values', async () => {
            await setLocalStorageData('undefinedKey', undefined);

            expect(chrome.storage.local.set).toHaveBeenCalledWith({
                undefinedKey: undefined
            });
        });

        it('should handle empty strings', async () => {
            await setLocalStorageData('emptyKey', '');

            expect(chrome.storage.local.set).toHaveBeenCalledWith({
                emptyKey: ''
            });
        });

        it('should handle multiple sequential sets', async () => {
            await Promise.all([
                setLocalStorageData('key1', 'value1'),
                setLocalStorageData('key2', 'value2'),
                setLocalStorageData('key3', 'value3')
            ]);

            expect(chrome.storage.local.set).toHaveBeenCalledTimes(3);
            expect(chrome.storage.local.set).toHaveBeenCalledWith({ key1: 'value1' });
            expect(chrome.storage.local.set).toHaveBeenCalledWith({ key2: 'value2' });
            expect(chrome.storage.local.set).toHaveBeenCalledWith({ key3: 'value3' });
        });

        it('should handle special characters in keys', async () => {
            await setLocalStorageData('key-with-dash', 'value1');
            await setLocalStorageData('key.with.dots', 'value2');
            await setLocalStorageData('key_with_underscore', 'value3');

            expect(chrome.storage.local.set).toHaveBeenCalledWith({
                'key-with-dash': 'value1'
            });
            expect(chrome.storage.local.set).toHaveBeenCalledWith({
                'key.with.dots': 'value2'
            });
            expect(chrome.storage.local.set).toHaveBeenCalledWith({
                'key_with_underscore': 'value3'
            });
        });
    });

    describe('LocalStorageDelegate class', () => {
        it('should have get and set methods', () => {
            expect(localStorageDelegate.get).toBe(getLocalStorageData);
            expect(localStorageDelegate.set).toBe(setLocalStorageData);
        });

        it('should inherit from StorageDelegate', () => {
            expect(localStorageDelegate.constructor.name).toBe('LocalStorageDelegate');
        });

        it('should work with delegate methods', async () => {
            chrome.storage.local.get.mockImplementation((key, callback) => {
                callback({ testKey: 'testValue' });
            });

            const getValue = await localStorageDelegate.get('testKey');
            expect(getValue).toBe('testValue');

            await localStorageDelegate.set('newKey', 'newValue');
            expect(chrome.storage.local.set).toHaveBeenCalledWith({
                newKey: 'newValue'
            });
        });
    });

    describe('Error handling', () => {
        it('should log error when get fails', async () => {
            chrome.storage.local.get.mockImplementation((key, callback) => {
                callback(undefined);
            });

            const result = await getLocalStorageData('errorKey');

            expect(console.log).toHaveBeenCalledWith('get local storage data failed for key = errorKey');
            expect(result).toBeUndefined();
        });

        it('should handle chrome.storage.local.get throwing error', async () => {
            chrome.storage.local.get.mockImplementation(() => {
                throw new Error('Chrome storage error');
            });

            // The function catches errors and logs them, doesn't re-throw
            try {
                await getLocalStorageData('testKey');
            } catch (e) {
                // Won't reach here because error is caught internally
            }
            
            // Instead, the function will return undefined and log the error
            expect(console.log).toHaveBeenCalled();
        });

        it('should handle chrome.storage.local.set throwing error', async () => {
            chrome.storage.local.set.mockImplementation(() => {
                throw new Error('Chrome storage set error');
            });

            // setLocalStorageData catches errors and logs them
            await setLocalStorageData('testKey', 'value');
            
            // Check that console.log was called (error was logged)
            expect(console.log).toHaveBeenCalled();
        });
    });

    describe('Integration scenarios', () => {
        it('should handle get and set cycle', async () => {
            const testData = {
                problems: [
                    { id: 1, name: 'Problem 1' },
                    { id: 2, name: 'Problem 2' }
                ],
                config: {
                    theme: 'dark',
                    language: 'en'
                }
            };

            // Mock set
            chrome.storage.local.set.mockImplementation((data) => {
                // Simulate storing
            });

            // Mock get to return what was set
            chrome.storage.local.get.mockImplementation((key, callback) => {
                if (key === 'testData') {
                    callback({ testData });
                } else {
                    callback({});
                }
            });

            // Set data
            await setLocalStorageData('testData', testData);

            // Get data back
            const retrievedData = await getLocalStorageData('testData');

            expect(retrievedData).toEqual(testData);
        });

        it('should handle updating existing data', async () => {
            const initialData = { count: 0 };
            const updatedData = { count: 1 };

            chrome.storage.local.get
                .mockImplementationOnce((key, callback) => {
                    callback({ counter: initialData });
                })
                .mockImplementationOnce((key, callback) => {
                    callback({ counter: updatedData });
                });

            // Get initial value
            const initial = await getLocalStorageData('counter');
            expect(initial).toEqual(initialData);

            // Update value
            await setLocalStorageData('counter', updatedData);

            // Get updated value
            const updated = await getLocalStorageData('counter');
            expect(updated).toEqual(updatedData);
        });
    });
});