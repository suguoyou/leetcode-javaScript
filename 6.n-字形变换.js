/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows == 1) return s
    const len = s.length
    let row = 0 // 当前第几行
    let arr = Array.from({ length: numRows }, () => []) // 构建二维数组
    let index = 0 // 索引值
    let flag = true
    while (index < len) {
        arr[row].push(s[index])
        index++
        if (row === numRows - 1) flag = false
        if (row === 0) flag = true
        if (flag) {
            row++
        } else {
            row--

        };
    }
    let str = ''
    arr.map(item => {
        str += item.join('')
    })
    console.log('arr', arr, str);
    return str
}
convert('PAYPALISHIRING', 3)
// @lc code=end

