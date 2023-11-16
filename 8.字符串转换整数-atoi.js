/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const max = Math.pow(2, 31) - 1
    const min = -Math.pow(2, 31)
    let str = s.trim()
    let len = str.length
    let index = 0
    let symbol = ''
    let pattern = /^[0-9]/
    let newStr = '0'
    while (index < len) {
        if (index == 0 && (str[index] == '-' || str[index] == '+')) {
            symbol = str[index]
        } else {
            if (pattern.test(str[index])) {
                newStr += str[index]
            } else {
                break
            }
        }
        index++
    }
    newStr = Number(symbol + newStr)
    return newStr > max ? max : newStr < min ? min : newStr
};

let str = myAtoi('+-12')

// @lc code=end

