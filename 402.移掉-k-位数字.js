/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    if (num.length <= k) return '0'
    let n = 0;
    while (n < num.length - 1) {
        if (k == 0) break;
        if (num[n] >= num[n + 1]) {
            num = num.substring(0, n) + num.substring(n + 1)
            --k
        } else {
            n++
        }
    }
    console.log(`num`, num);

    return Number(num).toString()
};

console.log(`====`, removeKdigits('10001', 4));

// @lc code=end

