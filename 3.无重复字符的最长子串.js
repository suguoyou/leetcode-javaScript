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
    let arr = s.split('')
    let str = ''
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let index = str.indexOf(arr[i])
        if (index == -1) {
            str += arr[i]
        } else {
            str = str.substring(index + 1) + arr[i]
        }
        newArr.push(str)
    }
    return newArr.reduce((acc, cur) => {
        return cur.length > acc.length ? cur : acc
    }, '').length
};

console.log(lengthOfLongestSubstring('abcabcbb'))
// @lc code=end

