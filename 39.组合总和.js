/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];
    (function helper(candidates, target, index, subset, result) {
        if (target == 0) { //基线条件
            result.push([...subset])
        } else if (target > 0 && index < candidates.length) {
            helper(candidates, target, index + 1, subset, result); // 不将数字添加到子集

            subset.push(candidates[index]); // 将数字添加到子集中
            helper(candidates, target - candidates[index], index, subset, result);
            subset.pop();
        }
    })(candidates, target, 0, [], result)
    console.log('result', result);
    return result;
};

combinationSum([2, 3, 6, 7], 7)
// @lc code=end

