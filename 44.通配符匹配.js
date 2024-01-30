/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let sArr = s.split('')
    let pArr = p.split('*')
    console.log('parr', pArr, sArr);
    let len = pArr.length - 1
    for (let i = len; i >= 0; i--) {

    }
};
const flag = isMatch('abcccccccd  ', '?*nj')
console.log('flag', flag);

// @lc code=end

