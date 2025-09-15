// Central mock data provider for tests
import problemsData from './problems.json';
import fsrsData from './fsrsData.json';
import configData from './config.json';

export const mockProblems = problemsData;
export const mockFsrsData = fsrsData;
export const mockConfig = configData;

// Helper functions to generate test data
export const generateProblem = (overrides = {}) => {
    const defaults = {
        index: Math.random().toString(36).substr(2, 9),
        name: 'Test Problem',
        level: 'Medium',
        url: 'https://leetcode.com/problems/test/',
        submissionTime: Date.now(),
        proficiency: 0,
        modificationTime: Date.now(),
        isDeleted: false,
        fsrsState: {
            difficulty: null,
            quality: null,
            lastReview: null,
            nextReview: null,
            reviewCount: 0,
            stability: 0,
            state: 'New',
            lapses: 0
        }
    };
    
    return { ...defaults, ...overrides };
};

export const generateMultipleProblems = (count = 5, template = {}) => {
    return Array.from({ length: count }, (_, i) => 
        generateProblem({
            index: `${i + 1}`,
            name: `Problem ${i + 1}`,
            ...template
        })
    );
};

export const generateReviewLog = (problemId, rating, timestamp = Date.now()) => {
    return {
        problemId,
        rating,
        timestamp,
        state: rating === 1 ? 'Again' : 'Learning'
    };
};

export const generateOperationHistory = (type = 'MASTER', timestamp = Date.now()) => {
    return {
        before: generateProblem(),
        isInCnMode: false,
        type,
        time: timestamp
    };
};

// Mock Chrome storage data
export const mockChromeStorageData = {
    problems: mockProblems.problemsMap,
    cn_problems: {
        '1': mockProblems.cnProblem
    },
    config: mockConfig.defaultConfig,
    fsrsParams: mockFsrsData.defaultParams,
    reviewLogs: mockFsrsData.reviewLogs,
    operationHistory: [],
    syncMetadata: {
        lastSync: Date.now(),
        deviceId: 'test-device-123',
        version: '0.1.6'
    }
};

// Mock API responses
export const mockLeetCodeApiResponse = {
    success: {
        questionId: '1',
        questionFrontendId: '1',
        title: 'Two Sum',
        titleSlug: 'two-sum',
        difficulty: 'Easy',
        likes: 12345,
        dislikes: 543,
        categoryTitle: 'Algorithms',
        content: '<p>Given an array of integers...</p>',
        topicTags: [
            { name: 'Array', slug: 'array' },
            { name: 'Hash Table', slug: 'hash-table' }
        ],
        stats: {
            totalAccepted: '1.2M',
            totalSubmission: '2.5M',
            acRate: '48.0%'
        }
    },
    error: {
        error: 'Problem not found',
        message: 'The requested problem does not exist'
    }
};

// Mock DOM elements
export const createMockElement = (className = '', innerHTML = '') => {
    const element = document.createElement('div');
    element.className = className;
    element.innerHTML = innerHTML;
    element.getAttribute = jest.fn((attr) => {
        if (attr === 'data-submit') return 'true';
        return null;
    });
    element.setAttribute = jest.fn();
    element.addEventListener = jest.fn();
    element.removeEventListener = jest.fn();
    element.click = jest.fn();
    return element;
};

export const createMockSubmissionResult = (status = 'success') => {
    const classMap = {
        'success': 'success-cn',
        'wrong': 'wrong-answer-cn',
        'error': 'compile-error-cn',
        'tle': 'time-limit-exceeded-cn'
    };
    
    return createMockElement(classMap[status] || 'unknown');
};

// Mock browser events
export const createMockEvent = (type = 'click', target = null) => {
    return {
        type,
        target: target || createMockElement(),
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        currentTarget: target || createMockElement()
    };
};

// Mock async delay
export const delay = (ms = 100) => new Promise(resolve => setTimeout(resolve, ms));

// Mock error scenarios
export const mockErrors = {
    networkError: new Error('Network request failed'),
    storageQuotaError: new Error('QuotaExceededError: Storage quota exceeded'),
    syncConflictError: new Error('SyncError: Conflict detected'),
    parseError: new Error('SyntaxError: Invalid JSON'),
    permissionError: new Error('PermissionError: Insufficient permissions')
};

// Test data validators
export const isValidProblem = (problem) => {
    return problem &&
        typeof problem.index !== 'undefined' &&
        typeof problem.name === 'string' &&
        typeof problem.level === 'string' &&
        typeof problem.url === 'string' &&
        typeof problem.submissionTime === 'number' &&
        typeof problem.proficiency === 'number';
};

export const isValidFsrsState = (fsrsState) => {
    return fsrsState &&
        typeof fsrsState.state === 'string' &&
        typeof fsrsState.reviewCount === 'number' &&
        typeof fsrsState.stability === 'number' &&
        typeof fsrsState.lapses === 'number';
};

// Export everything as default for convenience
export default {
    mockProblems,
    mockFsrsData,
    mockConfig,
    generateProblem,
    generateMultipleProblems,
    generateReviewLog,
    generateOperationHistory,
    mockChromeStorageData,
    mockLeetCodeApiResponse,
    createMockElement,
    createMockSubmissionResult,
    createMockEvent,
    delay,
    mockErrors,
    isValidProblem,
    isValidFsrsState
};