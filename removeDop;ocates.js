/**
 * @param {number[]} nums
 * @return {number}
 */
var nums = [1, 1, 2];
var removeDuplicates = function (nums) {
  return Array.from(new Set(nums)).length;
};
console.log(removeDuplicates(nums));
