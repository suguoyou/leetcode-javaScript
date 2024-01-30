/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = []
    if (nums.length === 0) return []
    helper([], nums)
    function helper(setArr, arr) {
        if (arr.length === 0) {
            result.push(Array.from(setArr))
            return
        }
        for (let i = 0; i < arr.length; i++) {
            const newArr = arr.filter((item, index) => index !== i)
            setArr.push(arr[i])
            helper(setArr, newArr)
            setArr.pop()
        }
    }
    console.log('result', result);
    
    return result
};

permute([1])
// @lc code=end

