/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) {
        return n
    }
    let num = 2, n1 = 1, n2 = 2
    for (let i = 2; i < n; i++) {
        num = n1 + n2
        n1 = n2
        n2 = num
    }
    return num
};

// @lc code=end

