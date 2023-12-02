/*
 * @lc app=leetcode.cn id=1833 lang=javascript
 *
 * [1833] 雪糕的最大数量
 */

// @lc code=start
/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    const arr = costs.sort((a, b) => a - b)
    let all = 0
    let index = 0
    let allNums = 0
    while (index < arr.length) {
        all += arr[index]
        if (all <= coins) {
            allNums++
            index++
        } else {
            break
        }
    }
    console.log('all', allNums)
    return allNums
};

maxIceCream([1,6,3,1,2,5], 20)
// @lc code=end

