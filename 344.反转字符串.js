/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    // return s.reverse(); 
    const n = s.length
    for (let left = 0, right = n - 1; left < right; ++left, --right) {
        [s[left], s[right]] = [s[right], s[left]]
    }
    return s
};
console.log(`==`, reverseString(["h", "e", "l", "l", "o"]));

// @lc code=end

