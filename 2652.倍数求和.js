/*
 * @lc app=leetcode.cn id=2652 lang=javascript
 *
 * [2652] 倍数求和
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
    let x = 1;
    let total = 0
    while (x <= n) {
        if (x % 3 === 0 || x % 5 === 0 || x % 7 === 0) {
            total += x
        }
        x++
    }
    console.log(`total`, total);
    return total
};
sumOfMultiples(1000)
// @lc code=end

