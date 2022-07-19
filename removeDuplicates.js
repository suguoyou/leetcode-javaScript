/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0,
    fast = 0;
  while (fast < nums.length) {
    console.log(nums, nums[fast], nums[slow]);
    if (nums[fast] != nums[slow]) {
      slow++;
      // 维护 nums[0..slow] 无重复
      nums[slow] = nums[fast];
    }
    fast++;
  }
  // 数组长度为索引 + 1
  return slow + 1;
};
removeDuplicates([1, 1, 2, 4, 6, 7, 7, 7, 9]);
