import { OperationHistory, OPS_TYPE } from '../../../src/popup/entity/operationHistory';

describe('OperationHistory Entity', () => {
    describe('OperationHistory Constructor', () => {
        it('should create an operation history with all properties', () => {
            const beforeState = { index: '1', name: 'Test Problem' };
            const isInCnMode = true;
            const type = OPS_TYPE.MASTER;
            const time = Date.now();

            const history = new OperationHistory(beforeState, isInCnMode, type, time);

            expect(history.before).toBe(beforeState);
            expect(history.isInCnMode).toBe(true);
            expect(history.type).toBe(OPS_TYPE.MASTER);
            expect(history.time).toBe(time);
        });

        it('should handle different data types', () => {
            const history = new OperationHistory(
                'string-state',
                false,
                'custom-type',
                '1704067200000'
            );

            expect(history.before).toBe('string-state');
            expect(history.isInCnMode).toBe(false);
            expect(history.type).toBe('custom-type');
            expect(history.time).toBe('1704067200000');
        });

        it('should handle null and undefined values', () => {
            const history = new OperationHistory(null, undefined, null, undefined);

            expect(history.before).toBeNull();
            expect(history.isInCnMode).toBeUndefined();
            expect(history.type).toBeNull();
            expect(history.time).toBeUndefined();
        });

        it('should store complex objects in before property', () => {
            const complexBefore = {
                problem: {
                    index: '1',
                    name: 'Complex Problem',
                    fsrsState: {
                        difficulty: 3,
                        reviewCount: 5
                    }
                },
                metadata: {
                    source: 'leetcode',
                    timestamp: Date.now()
                }
            };

            const history = new OperationHistory(
                complexBefore,
                true,
                OPS_TYPE.RESET,
                Date.now()
            );

            expect(history.before).toEqual(complexBefore);
            expect(history.before.problem.fsrsState.difficulty).toBe(3);
        });
    });

    describe('OPS_TYPE Constants', () => {
        it('should have correct operation type values', () => {
            expect(OPS_TYPE.MASTER).toBe('mark as mastered');
            expect(OPS_TYPE.RESET).toBe('reset progress');
            expect(OPS_TYPE.DELETE).toBe('delete record');
        });

        it('should be frozen and immutable', () => {
            expect(Object.isFrozen(OPS_TYPE)).toBe(true);
            
            // Attempt to modify should not work (will throw in strict mode)
            const originalMaster = OPS_TYPE.MASTER;
            expect(() => {
                'use strict';
                OPS_TYPE.MASTER = 'modified';
            }).toThrow();
            expect(OPS_TYPE.MASTER).toBe(originalMaster);

            // Attempt to add new property should not work (will throw in strict mode)
            const originalKeys = Object.keys(OPS_TYPE).length;
            expect(() => {
                'use strict';
                OPS_TYPE.NEW_TYPE = 'new operation';
            }).toThrow();
            expect(Object.keys(OPS_TYPE).length).toBe(originalKeys);
            expect(OPS_TYPE.NEW_TYPE).toBeUndefined();
        });

        it('should have exactly 3 operation types', () => {
            const keys = Object.keys(OPS_TYPE);
            expect(keys).toHaveLength(3);
            expect(keys).toContain('MASTER');
            expect(keys).toContain('RESET');
            expect(keys).toContain('DELETE');
        });
    });

    describe('Use Cases', () => {
        it('should track master operation correctly', () => {
            const problemBefore = {
                index: '42',
                name: 'Trapping Rain Water',
                proficiency: 3
            };
            
            const history = new OperationHistory(
                problemBefore,
                false,
                OPS_TYPE.MASTER,
                1704067200000
            );

            expect(history.type).toBe('mark as mastered');
            expect(history.before.proficiency).toBe(3);
        });

        it('should track reset operation correctly', () => {
            const problemBefore = {
                index: '1',
                name: 'Two Sum',
                fsrsState: {
                    reviewCount: 10,
                    state: 'Review'
                }
            };

            const history = new OperationHistory(
                problemBefore,
                true,
                OPS_TYPE.RESET,
                Date.now()
            );

            expect(history.type).toBe('reset progress');
            expect(history.isInCnMode).toBe(true);
            expect(history.before.fsrsState.reviewCount).toBe(10);
        });

        it('should track delete operation correctly', () => {
            const problemBefore = {
                index: '100',
                name: 'Same Tree',
                isDeleted: false
            };

            const timestamp = Date.now();
            const history = new OperationHistory(
                problemBefore,
                false,
                OPS_TYPE.DELETE,
                timestamp
            );

            expect(history.type).toBe('delete record');
            expect(history.before.isDeleted).toBe(false);
            expect(history.time).toBe(timestamp);
        });

        it('should handle batch operations', () => {
            const batchBefore = [
                { index: '1', name: 'Problem 1' },
                { index: '2', name: 'Problem 2' },
                { index: '3', name: 'Problem 3' }
            ];

            const history = new OperationHistory(
                batchBefore,
                false,
                OPS_TYPE.DELETE,
                Date.now()
            );

            expect(Array.isArray(history.before)).toBe(true);
            expect(history.before).toHaveLength(3);
            expect(history.before[0].index).toBe('1');
        });
    });

    describe('Serialization', () => {
        it('should be serializable to JSON', () => {
            const history = new OperationHistory(
                { index: '1', name: 'Test' },
                true,
                OPS_TYPE.MASTER,
                1704067200000
            );

            const json = JSON.stringify(history);
            const parsed = JSON.parse(json);

            expect(parsed.before.index).toBe('1');
            expect(parsed.isInCnMode).toBe(true);
            expect(parsed.type).toBe('mark as mastered');
            expect(parsed.time).toBe(1704067200000);
        });

        it('should handle circular references gracefully', () => {
            const circular = { index: '1' };
            circular.self = circular;

            // This would normally throw an error with JSON.stringify
            // In real implementation, you might want to handle this
            expect(() => {
                new OperationHistory(circular, false, OPS_TYPE.RESET, Date.now());
            }).not.toThrow();
        });
    });

    describe('Edge Cases', () => {
        it('should handle empty constructor', () => {
            const history = new OperationHistory();

            expect(history.before).toBeUndefined();
            expect(history.isInCnMode).toBeUndefined();
            expect(history.type).toBeUndefined();
            expect(history.time).toBeUndefined();
        });

        it('should handle very large timestamps', () => {
            const largeTimestamp = Number.MAX_SAFE_INTEGER;
            const history = new OperationHistory(
                {},
                false,
                OPS_TYPE.RESET,
                largeTimestamp
            );

            expect(history.time).toBe(largeTimestamp);
        });

        it('should preserve reference to before object', () => {
            const beforeObj = { index: '1', name: 'Test' };
            const history = new OperationHistory(
                beforeObj,
                false,
                OPS_TYPE.MASTER,
                Date.now()
            );

            // Should be the same reference, not a copy
            expect(history.before).toBe(beforeObj);
            
            // Modifying original should affect history
            beforeObj.name = 'Modified';
            expect(history.before.name).toBe('Modified');
        });
    });
});