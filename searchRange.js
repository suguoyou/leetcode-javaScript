// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1, -1]
    let left = 0
    let right = nums.length - 1
    while(left < right) {
        let mid = (left + right) >> 1;
        console.log(left, right, target, mid);
        break
        if (nums[left] == target) {
            result[0] = result[0] != -1 ? result[0] : left
        } else {
            left++
        }
        if (nums[right] == target) {
            result[1] = result[1] != -1 ? result[1] : right
        } else {
            right--
        }
    }
    console.log(result);
    return result
};

const nums = [5,7,7,8,8,10], target = 8

searchRange(nums, target)