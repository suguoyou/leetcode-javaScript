/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    // if (s.includes('LLL') || s.split('').filter(item => item == 'A').length >= 2) {
    //     return false
    // }
    // return true
    const list = s.split('');
    let aNum = 0, lNum = 0, n = 0;
    while (n < list.length) {
        if (list[n] == 'A') {
            aNum++
        }
        if (list[n] == 'L') {
            lNum++
        } else {
            lNum = 0
        }
        if (aNum >= 2 || lNum >= 3) {
            return false
        }
        n++
    }
    return true
};
const flag = checkRecord("PPALLL")
console.log(`===`, flag);

// @lc code=end

