/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let total = 0;
    for (let i = 0; i < timeSeries.length; i++) {
        total = total >= timeSeries[i] ? timeSeries[i] - 1 : total
        total += duration
        console.log(`===`, timeSeries[i], total);
    }

    return total
};
findPoisonedDuration([1, 2, 3, 4, 4, 4, 10], 2)

// list.map((item, index) => {
//     if (index < list.length - 1 && list[index + 1] - item < 5) {
//         console.log(`++++`, list[index + 1], item, index);
//     }
// })







// @lc code=end

