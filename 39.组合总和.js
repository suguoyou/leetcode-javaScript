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
    const helper = (setArr, index, sum) => {
        if (sum >= target) {
            if (sum === target) {
                result.push([...setArr])
            }
            return
        }
        helper(setArr, index, sum + candidates[index])
        if (index + 1 < candidates.length ) {
            setArr.push(candidates[index])
            helper(setArr, index + 1, sum)
            setArr.pop()
        }
    }
    helper([], 0, 0)
    return result;
};

combinationSum([1, 2, 3, 4, 5], 7)
// @lc code=end

