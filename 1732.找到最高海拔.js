/*
 * @lc app=leetcode.cn id=1732 lang=javascript
 *
 * [1732] 找到最高海拔
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let ans = 0, sum = 0;
    for (let i = 0; i < gain.length; i++) {
        sum += gain[i]
        ans = Math.max(ans, sum)
    }
    return ans
};
console.log(`==`, largestAltitude([-4, -3, -2, -1, 4, 3, 2]));

// @lc code=end

