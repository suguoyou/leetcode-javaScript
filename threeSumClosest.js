// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

// 返回这三个数的和。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let sumTotal = Number.MAX_VALUE
    const list = nums.sort((a, b) => a - b)
    for (let i = 0; i < list.length; i++) {
        const leftVal = list[i]
        let left = i + 1;
        let right = list.length - 1
        while(left < right) {
            const currentTotal = leftVal + list[left] + list[right]
            currentTotal - target > 0 ? right-- : left++
            sumTotal = Math.abs(currentTotal - target) < Math.abs(sumTotal - target) ? currentTotal : sumTotal
        }
    }
    return sumTotal
};

const nums = [2,3,8,9,10]
const target = 16

threeSumClosest(nums, target)