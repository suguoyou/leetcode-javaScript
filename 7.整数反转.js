/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let absStr = Math.abs(x) + ''
    let negative = x < 0
    let newNum = absStr.split('').reverse().join('')
    newNum = negative ? -Number(newNum) : Number(newNum)
    return newNum > Math.pow(2, 31) - 1 || newNum < -Math.pow(2, 31) ? 0 : newNum
};


// @lc code=end

