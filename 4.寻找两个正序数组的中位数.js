/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const arr = nums1.concat(nums2).sort((a, b) => a - b)
    let flag = 0
    if (arr.length % 2 == 0) {
        let index = Math.floor(arr.length / 2)
        flag = (arr[index - 1] + arr[index]) / 2
    } else {
        flag = arr[Math.ceil(arr.length / 2) - 1]
    }
    return flag
};

let nums1 = [3], nums2 = [-2, -1]
console.log(findMedianSortedArrays(nums1, nums2));
// @lc code=end

