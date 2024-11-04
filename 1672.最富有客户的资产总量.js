/*
 * @lc app=leetcode.cn id=1672 lang=javascript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let total = 0
    for (let i = 0; i < accounts.length; i++) {
        let sum = 0
        sum = accounts[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        total = Math.max(total, sum)
    }
    return total
};

maximumWealth([[1, 5], [7, 3], [3, 5]])
// @lc code=end

