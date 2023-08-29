// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//     let ans = 0
//     let min_num = prices[0]
//     for (var i = 1; i < prices.length; i++) {
//         min_num = Math.min(min_num, prices[i])
//         ans = Math.max(ans, prices[i] - min_num)
//     }
//     return ans
// };

// let nums = [1,2,4,6,3,5]
// maxProfit(nums)


// 买卖股票的最佳时机 II

// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

// 返回 你能获得的 最大 利润 。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // let max = prices[0],
    //     min = prices[0],
    //     ans = 0

    // for (let i = 1; i < prices.length; i++) {
    //     if (prices[i] < max) {
    //         ans += max - min
    //         max = min = prices[i]
    //     } else max = prices[i]
    //     if (i == prices.length - 1 && max == prices[i]) ans += max -min
    // }
    // console.log(ans)
    // return ans
    let ans = 0;
    for(let i = 0; i < prices.length - 1; i++) {
        if(prices[i] < prices[i+1]) {
            ans += prices[i+1] - prices[i];
        }
    }
    return ans;
};

let nums = [6,1,3,2,4,7]

maxProfit(nums)