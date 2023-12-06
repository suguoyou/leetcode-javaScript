/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const arr = nums.sort((a, b) => a - b)
    let newSet = new Set()
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let left = j + 1,
                right = arr.length - 1
            while (left < right) {
                const tempTarget = arr[i] + arr[j] + arr[left] + arr[right]
                if (tempTarget < target) {
                    left++
                } else if (tempTarget > target) {
                    right--
                } else {
                    newSet.add([arr[i], arr[j], arr[left], arr[right]].toString())
                    left++
                }
            }
        }
    }
    const newArr = [...newSet].reduce((acc, cur) => {
        acc.push(cur.split(','))
        return acc
    }, [])

    console.log(newArr)
    return newArr
};

fourSum([2, 2, 2, 2, 2], 8)
// @lc code=end

