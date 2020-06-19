var assert = require('assert');
var SelectionSort = require('../../src/sort/SelectionSort');
describe('sort', function() {
    describe('SelectionSort', function() {
        it('SelectionSort', function() {
            var nums = [5,3,2,1,0,6,4,2];
            SelectionSort.SelectionSortIteration(nums);
            var sortedNums = [0,1,2,2,3,4,5,6];
            assert.deepEqual(nums, sortedNums);
        });
        it('SelectionSort', function() {
            var nums = [3,2,1,2,1,1,-4,3,1];
            SelectionSort.SelectionSortRecursion(nums);
            var sortedNums = [-4,1,1,1,1,2,2,3,3];
            assert.deepEqual(nums, sortedNums);
        });
    });
});