/*
 * @lc app=leetcode.cn id=2678 lang=javascript
 *
 * [2678] 老人的数目
 */

// @lc code=start
/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    let num = 0

    let i = details.length - 1
    while (i >= 0) {
        const age = details[i].substring(11, 13)
        console.log(`age`, age, Number(age));
        if (Number(age) > 60) {
            num++
        }
        i--
    }
    return num
};

countSeniors(["9751302862F0693", "3888560693F7262", "5485983835F0649", "2580974299F6042", "9976672161M6561", "0234451011F8013", "4294552179O6482"])
// @lc code=end

