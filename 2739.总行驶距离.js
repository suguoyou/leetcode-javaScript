/*
 * @lc app=leetcode.cn id=2739 lang=javascript
 *
 * [2739] 总行驶距离
 */

// @lc code=start
/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
// 该卡车每耗费 1 升燃料都可以行驶 10 km。每当主油箱使用了 5 升燃料时，如果副油箱至少有 1 升燃料，则会将 1 升燃料从副油箱转移到主油箱。
var distanceTraveled = function (mainTank, additionalTank) {
    // const dfs = function (mainTank, subTank, mileage) {
    //     if (mainTank >= 5) {
    //         if (subTank >= 1) {
    //             return dfs(mainTank - 5 + 1, subTank - 1, mileage + 50)
    //         } else {
    //             return dfs(mainTank - 5, 0, mileage + 50)
    //         }
    //     } else {
    //         return mileage + mainTank * 10
    //     }
    // }
    // return dfs(mainTank, additionalTank, 0)
    // let mileage = 0
    // while (mainTank >= 5) {
    //     mileage += 50
    //     mainTank -= 5
    //     if (additionalTank > 0) {
    //         additionalTank--
    //         mainTank++
    //     }
    // }
    // return mileage + mainTank * 10
    return 10 * (mainTank + Math.min(Math.floor((mainTank - 1) / 4), additionalTank));
};
const total = distanceTraveled(1, 2)
console.log(`===`, total);

// @lc code=end

