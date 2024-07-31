/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = [];

    function dfs(s, open, close) {
        if (s.length === n * 2) {
            result.push(s)
            return
        }
        if (open < n) {
            dfs(s + '(', open + 1, close)
        }
        if (open > close) {
            dfs(s + ')', open, close + 1)
        }
    }

    dfs('', 0, 0);
    return result;
};

const arr = generateParenthesis(3)
console.log(`arr`, arr);

// @lc code=end

