/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {

    const maxValue = Math.max(...nums);
    const index = nums.findIndex(item => item === maxValue)
    nums.splice(index, 1)
    const secondValue = Math.max(...nums);
    return maxValue >= secondValue * 2 ? index : -1;

};
// @lc code=end

