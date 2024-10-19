/*
 * @lc app=leetcode.cn id=1952 lang=javascript
 *
 * [1952] 三除数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
    let list = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            list.push(i);
            if (list.length > 3) {
                return false
            }
        }
    }
    return list.length === 3;
};
// @lc code=end
console.log(`isThree`, isThree(8));


