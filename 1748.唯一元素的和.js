/*
 * @lc app=leetcode.cn id=1748 lang=javascript
 *
 * [1748] 唯一元素的和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {

    // const list = []

    // nums.forEach(item => {
    //     const total = nums.filter(num => num === item).length
    //     if (total === 1) {
    //         list.push(item)
    //     }
    // })
    // return list.reduce((a, b) => a + b, 0)

    let sum = 0;
    let obj = new Map()

    nums.forEach(item => {
        if (!obj.get(item)) {
            sum += item
            obj.set(item, 1)
        } else if (obj.get(item) === 1) {
            sum -= item
            obj.set(item, -1)
        }
    })
    return sum
};
// @lc code=end


const total = sumOfUnique([2, 1, 3, 4, 5, 2, 4, 5, 3])
console.log(`total`, total);