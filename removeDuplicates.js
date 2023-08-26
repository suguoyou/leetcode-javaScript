// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//   let slow = 0,
//     fast = 0;
//   while (fast < nums.length) {
//     console.log(nums, nums[fast], nums[slow]);
//     if (nums[fast] != nums[slow]) {
//       slow++;
//       // 维护 nums[0..slow] 无重复
//       nums[slow] = nums[fast];
//     }
//     fast++;
//   }
//   // 数组长度为索引 + 1
//   return slow + 1;
// };
// removeDuplicates([1, 1, 2, 4, 6, 7, 7, 7, 9]);

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let show = 2,
      fast = 2
  while (fast < nums.length) {
    console.log(nums, fast, show)
    if (nums[fast] != nums[show - 2]) {
      nums[show] = nums[fast]
      show++
    }
    fast++
  }
  nums.splice(show)
  return ++show
};

let nums = [0,0,1,1,1,1,2,3,3]

removeDuplicates(nums)

