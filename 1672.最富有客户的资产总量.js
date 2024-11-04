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

    const list = accounts.reduce((acc, cur) => {
        acc.push(
            cur.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        )
        return acc
    }, [])
    return Math.max(...list)
};

maximumWealth([[1, 5], [7, 3], [3, 5]])
// @lc code=end

