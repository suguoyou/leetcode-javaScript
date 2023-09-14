/**
 * @param {number[]} nums
 * @return {number[]}
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
   题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
   请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 */
var productExceptSelf = function (nums) {
    let allNum = 1
    let zeroCount = 0
    let zeroIndex = -1
    let answer = Array(nums.length).fill(0)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            allNum *= nums[i]
        } else {
            zeroCount++
            zeroIndex = i
        }
    }
    if (zeroCount == 1) {
        answer[zeroIndex] = allNum
    } else if (zeroCount == 0) {
        nums.map((item, index) => {
            answer[index] = allNum / item
        })
    }
    return answer
};

let nums = [-1, 1, 0, -3, 3]
console.log(productExceptSelf(nums))