/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // const obj = []
    // for (let i = 0; i < nums.length; i++) {
    //     if (obj[nums[i]]) {
    //         obj[nums[i]] = obj[nums[i]]++
    //     }
    //     obj[nums[i]] = obj[nums[i]] ? ++obj[nums[i]] : 1
    //     if (obj[nums[i]] > nums.length / 2) {
    //         return nums[i]
    //     }
    // }
    nums.sort((a, b) => a - b)
    return nums[Math.floor(nums.length/2)]
};

let nums = [2, 2, 1, 1, 1, 2, 2]

let num = majorityElement(nums)
console.log(num)