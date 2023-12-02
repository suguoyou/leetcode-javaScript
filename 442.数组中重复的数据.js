/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    const map = new Map()
    const arr = []
    let index = 0
    while (index < nums.length) {
        if (map.has(nums[index])) {
            arr.push(nums[index])
        } else {
            map.set(nums[index], '')
        }
        index++
    }
    console.log('arr', arr);
    return arr
};

findDuplicates([1])
// @lc code=end

