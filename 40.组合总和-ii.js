/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    const res = [];
    const helper = (start, setArr, sum) => {
        if (sum >= target) {
            if (sum == target) {
                res.push([...setArr])
            }
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i - 1 >= start && candidates[i - 1] == candidates[i]) {
                continue;
            }
            setArr.push(candidates[i])
            helper(i + 1, setArr, sum + candidates[i])
            setArr.pop()
        }
    };

    helper(0, [], 0);
    return res;
};

combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
// @lc code=end

