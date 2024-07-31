/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {

    let list = []
    function dfs(start, path) {
        if (path.length === k) {
            list.push([...path])
            return
        }
        for (let i = start; i <= n; i++) {
            dfs(i + 1, [...path, i])
        }
    }
    dfs(1, [])
    return list
};

const list = combine(1, 1)
console.log(`list`, list);

// @lc code=end

