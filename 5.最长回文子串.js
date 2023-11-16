/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let length = s.length
    if (length < 2) return s
    let maxPalindrome = ''
    for (let i = 0; i < length; i++) {
        test(i, i)
        test(i, i + 1)
    }

    function test(m, n) {
        while (m >= 0 && n < length && s[m] === s[n]) {
            m--
            n++
        }
        if (n - m - 1 > maxPalindrome.length) {
            maxPalindrome = s.slice(m + 1, n)
        }
    }
    console.log('maxPalindrome', maxPalindrome);
    return maxPalindrome
};
longestPalindrome('cbbd')
// @lc code=end

