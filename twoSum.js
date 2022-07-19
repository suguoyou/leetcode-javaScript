/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   for (let j = 0; j < nums.length; j++) {
//     for (let i = j + 1; i < nums.length; i++) {
//       if (nums[j] + nums[i] == target) {
//         return [j, i];
//       }
//     }
//   }
// };
// var twoSum = function (nums, target) {
//   for (let j = 0; j < nums.length; j++) {
//     let result = target - nums[j];
//     let index = nums.indexOf(result);
//     if (index !== -1 && index !== j) {
//       return [j, index];
//     }
//   }
// };
var twoSum = function (nums, target) {
  let hash = {};
  for (var i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      return [i, hash[target - nums[i]]];
    }
    hash[nums[i]] = i;
  }
};

var nums = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(nums, target));
