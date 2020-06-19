var assert = require('assert');
var InsertionSort = require('../../src/sort/InsertionSort');
describe('sort', function() {
    describe('InsertionSort', function() {
        it('InsertionSort', function() {
            var nums = [5,3,2,1,0,6,4,2];
            InsertionSort.InsertionSort(nums);
            var sortedNums = [0,1,2,2,3,4,5,6];
            assert.deepEqual(nums, sortedNums);
        });
        it('InsertionSort', function() {
          var nums = [3,2,1,2,1,1,-4,3,1];
          InsertionSort.InsertionSort(nums);
          var sortedNums = [-4,1,1,1,1,2,2,3,3];
          assert.deepEqual(nums, sortedNums);
      });
    });
});