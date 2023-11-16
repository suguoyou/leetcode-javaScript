/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let len = height.length
    let left = 0
    let right = len - 1
    let maxWater = 0
    while (left < right) {
        let h = Math.min(height[left], height[right])
        maxWater = Math.max(maxWater, h * (right - left))
        if (height[left] < height[right]) left++
        else right--
    }
    return maxWater
};



// @lc code=end

