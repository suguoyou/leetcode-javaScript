/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0];
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        max = Math.max(max, prices[i] - min)
    }

    return max
    // let min = 0;
    // for (let i = 0; i < prices.length; i++) {
    //     if (i !== prices.length - 1) {
    //         const list = prices.slice(i + 1)
    //         max = Math.max(...list)
    //         min = max - prices[i] > min ? max - prices[i] : min
    //     }
    // }

    // return min
};

console.log(`maxProfit`, maxProfit([7, 6, 4, 3, 1]));

// @lc code=end

