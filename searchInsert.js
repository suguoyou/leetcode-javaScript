// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
//   if (nums.indexOf(target) > -1) {
//     return nums.indexOf(target);
//   } else {
//     nums.push(target);
//     nums.sort((a, b) => a - b);
//     return nums.indexOf(target);
//   }
// };
var searchInsert = function (nums, target) {
  const index = nums.findIndex((item) => item >= target);
  return index > -1 ? index : nums.length;
};
nums = [1, 3, 5, 6];

let index = searchInsert(nums, 0);
console.log(index);
