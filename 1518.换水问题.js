/*
 * @lc app=leetcode.cn id=1518 lang=javascript
 *
 * [1518] 换水问题
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let emptyBottles = numBottles
    let total = numBottles
    while (emptyBottles >= numExchange) {
        const exchangedBottles = Math.floor(emptyBottles / numExchange)
        total += exchangedBottles
        emptyBottles = exchangedBottles + (emptyBottles % numExchange)
    }
    return total
};
// @lc code=end

