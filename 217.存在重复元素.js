/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return true
        } else {
            map.set(nums[i], 1)
        }
    }
    return false
};

const flag = containsDuplicate([1, 2, 3, 1])
console.log('===', flag);
// @lc code=end

