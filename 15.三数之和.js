/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const arr = nums.sort((a, b) => a - b)
    if (arr.length < 3) return []
    let resArr = []
    console.log('arr', arr);
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue
        let left = i + 1;
        let right = arr.length - 1
        while (left < right) {
            const total = arr[i] + arr[left] + arr[right]
            if (total == 0) {
                resArr.push([arr[i], arr[left], arr[right]])
                while (arr[left] === arr[left + 1]) {
                    left++
                }
                while (arr[right] === arr[right - 1]) {
                    right--
                }
                left++
                right--
            } else if (total < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return resArr
};
threeSum([-1, 0, 1, 2, -1, -4])
// @lc code=end

