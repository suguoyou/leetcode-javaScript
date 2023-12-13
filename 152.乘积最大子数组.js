/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    if (nums.length === 0) return 0
    let min = max = nums[0], dp = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            [min, max] = [max, min]
        }
        min = Math.min(nums[i] * min, nums[i])
        max = Math.max(nums[i] * max, nums[i])
        dp.push(max)
    }
    console.log('total', dp);
    return Math.max(...dp)
};

maxProduct([0, -2, -3])
// @lc code=end

