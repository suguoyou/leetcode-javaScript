/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let filterArr = []
    nums.map((item, index) => {
        if (item === target) filterArr.push(index)
    })
    console.log(filterArr)

    if (filterArr.length === 0) {
        return [-1, -1]
    }
    if (filterArr.length === 1) {
        return [filterArr[0], filterArr[0]]
    }
    if (filterArr.length >= 2) {
        return [filterArr[0], filterArr[filterArr.length - 1]]
    }
};

let haha = searchRange([1], 1)
console.log('haha', haha);
// @lc code=end

