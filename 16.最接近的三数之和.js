/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    if (nums.length === 3) return nums.reduce((acc, cur) => acc += cur, 0)
    const arr = nums
    let total = arr[0] + arr[1] + arr[2]
    for (let i = 0; i < arr.length; i++) {
        let left = i + 1, right = arr.length - 1;
        while (left < right) {
            let tempTotal = arr[i] + arr[left] + arr[right]
            let diffNum = Math.abs(tempTotal - target)
            let tempNum = Math.abs(total - target)
            if (diffNum < tempNum) total = tempTotal
            if (right - 1 > left) right--
            else {
                left++
                right = arr.length - 1
            }
        }
    }
    console.log(total)
    return total
};

// @lc code=end

