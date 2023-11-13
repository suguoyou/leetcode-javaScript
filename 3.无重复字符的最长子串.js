/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0, slow = 0
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) >= slow) {
            slow = map.get(s[i]) + 1
        }

        maxLength = Math.max(i - slow + 1, maxLength)
        map.set(s[i], i)
    }
    return maxLength
};

console.log(lengthOfLongestSubstring('abcabcbb'))
// @lc code=end

