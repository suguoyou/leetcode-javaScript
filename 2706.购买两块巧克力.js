/*
 * @lc app=leetcode.cn id=2706 lang=javascript
 *
 * [2706] 购买两块巧克力
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    let total = 0
    let flag = false
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const remainder = money - prices[i] - prices[j]
            total = remainder >= 0 && remainder >= total ? remainder : total
            if (remainder >= 0) {
                flag = true
            }
        }
    }
    return flag ? total : money
};

const total = buyChoco([1, 2, 2], 3)
console.log(`total`, total);

// @lc code=end

