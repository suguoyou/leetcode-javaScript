/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n == 1) return true
    if (n < 1) return false
    function dfs(x) {
        if (x == 2) return true
        if (x % 2 !== 0) return false
        return dfs(x / 2)
    }
    return dfs(n)
};

const flag = isPowerOfTwo(3)
console.log(`===`, flag);

// @lc code=end

