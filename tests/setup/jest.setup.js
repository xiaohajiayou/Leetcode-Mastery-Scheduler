import '@testing-library/jest-dom';

// Mock Chrome API
global.chrome = {
  runtime: {
    sendMessage: jest.fn((message, callback) => {
      if (callback) callback({});
    }),
    onMessage: {
      addListener: jest.fn(),
      removeListener: jest.fn()
    },
    lastError: null
  },
  storage: {
    local: {
      get: jest.fn((keys, callback) => {
        if (callback) callback({});
      }),
      set: jest.fn((items, callback) => {
        if (callback) callback();
      }),
      remove: jest.fn((keys, callback) => {
        if (callback) callback();
      }),
      clear: jest.fn((callback) => {
        if (callback) callback();
      })
    },
    sync: {
      get: jest.fn((keys, callback) => {
        if (callback) callback({});
      }),
      set: jest.fn((items, callback) => {
        if (callback) callback();
      }),
      remove: jest.fn((keys, callback) => {
        if (callback) callback();
      }),
      clear: jest.fn((callback) => {
        if (callback) callback();
      }),
      getBytesInUse: jest.fn((keys, callback) => {
        if (callback) callback(0);
      })
    }
  },
  tabs: {
    create: jest.fn(),
    query: jest.fn((query, callback) => {
      if (callback) callback([]);
    }),
    sendMessage: jest.fn()
  },
  notifications: {
    create: jest.fn()
  },
  alarms: {
    create: jest.fn(),
    clear: jest.fn(),
    onAlarm: {
      addListener: jest.fn()
    }
  }
};

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock fetch
global.fetch = jest.fn();

// Mock DOM APIs
global.document.querySelector = jest.fn();
global.document.querySelectorAll = jest.fn(() => []);
global.document.getElementById = jest.fn();
global.document.getElementsByClassName = jest.fn(() => []);
global.document.getElementsByTagName = jest.fn(() => []);

// Mock window.location - only if not already defined
if (!window.location || Object.getOwnPropertyDescriptor(window, 'location').configurable) {
  Object.defineProperty(window, 'location', {
    value: {
      href: 'https://leetcode.com',
      hostname: 'leetcode.com',
      pathname: '/',
      search: '',
      reload: jest.fn()
    },
    writable: true,
    configurable: true
  });
}

// Mock SweetAlert2
global.Swal = {
  fire: jest.fn(() => Promise.resolve({ isConfirmed: true })),
  showLoading: jest.fn(),
  hideLoading: jest.fn(),
  close: jest.fn()
};

// Clear all mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
  localStorage.clear();
});