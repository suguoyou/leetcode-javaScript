/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const list = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I',
    }
    let remainder = num
    let romanStr = ''

    const keyList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let left = 0, right = keyList.length - 1
    while (left <= right) {
        // console.log('keyList[left]', keyList, remainder, keyList[left]);
        if (remainder >= keyList[left]) {
            romanStr += list[keyList[left]]
            remainder = remainder - keyList[left]
        } else {
            left++
        }
    }
    console.log('romanStr', romanStr);
    return romanStr
};

intToRoman(4)
// @lc code=end

