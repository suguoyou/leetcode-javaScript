/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    function calc_power(x, n) {
        if (x === 0) return 0
        if (n === 0) return 1

        let res = calc_power(x, Math.floor(n / 2));
        res = res * res;

        if (n % 2 === 1) {
            return res * x;
        }

        return res;
    }

    let ans = calc_power(x, Math.abs(n));

    return n >= 0 ? ans : 1 / ans;
};

myPow(2.00000, 10)

// @lc code=end

