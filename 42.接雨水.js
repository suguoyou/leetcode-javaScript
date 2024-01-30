/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (height.length <= 2) return 0
    let total = 0
    let leftMax = 0
    for (let i = 1; i < height.length; i++) {
        const curVal = height[i]
        const rightArr = height.slice(i + 1)
        if (rightArr.length === 0) break
        const rightMax = Math.max(...rightArr)
        leftMax = Math.max(height[i - 1], leftMax)
        const min = Math.min(leftMax, rightMax)
        if (curVal < min) total += min - curVal
    }
    console.log('===', total);
    return total
};

const temp = trap([4,2,0,3,2,5]) // 6
// [4,2,0,3,2,5]
// 输出：9
// @lc code=end

