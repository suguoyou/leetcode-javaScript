/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    function dfs(arr, index) {
        if (index === arr.length - 1) {
            return arr
        }

        if (arr[index][1] >= arr[index + 1][0] && arr[index][0] <= arr[index + 1][1]) {
            arr[index][1] = Math.max(arr[index][1], arr[index + 1][1])
            arr[index][0] = Math.min(arr[index][0], arr[index + 1][0])
            arr.splice(index + 1, 1)
            return dfs(arr, index)
        } else {
            return dfs(arr, index + 1)
        }
    }
    const arr = intervals.sort((a, b) => a[0] - b[0])
    const list = dfs(arr, 0)
    return list
};

merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]])
// @lc code=end

