var assert = require('assert');
var BubbleSort = require('../../src/sort/BubbleSort');
describe('sort', function() {
    describe('BubbleSort', function() {
        it('BubbleSortIteration', function() {
            var nums = [5,3,2,1,0,6,4,2];
            BubbleSort.BubbleSortIteration(nums);
            var sortedNums = [0,1,2,2,3,4,5,6];
            assert.deepEqual(nums, sortedNums);
        });
        it('BubbleSortRecursion', function() {
            var nums = [3,2,1,2,1,1,-4,3,1];
            BubbleSort.BubbleSortRecursion(nums);
            var sortedNums = [-4,1,1,1,1,2,2,3,3];
            assert.deepEqual(nums, sortedNums);
        });
    });
});