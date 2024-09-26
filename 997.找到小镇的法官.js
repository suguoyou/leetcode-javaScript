/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {

    let judge = trust[0][1]
    for (let i = 0; i < trust.length; i++) {
        if (judge !== trust[i][1]) {
            return -1
        }
    }
    return judge
};

findJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]])
// @lc code=end

