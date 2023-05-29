// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

// 你返回所有和为 0 且不重复的三元组。


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {

    // const sortNum = nums.sort((a, b) => a - b)
    // let list = []
    // let obj = {}
    // for (let i = 0; i < sortNum.length - 1; i++) {
    //     const leftVal = sortNum[i]
    //     let left = i + 1
    //     let right = sortNum.length - 1
    //     while (left < right) {
    //         const flag = sortNum[left] + sortNum[right] + leftVal
    //         if (flag == 0) {
    //             let arr = [leftVal, sortNum[left], sortNum[right]]
    //             if (!obj.hasOwnProperty(arr)) {
    //                 list.push(arr)
    //                 obj[arr] = left
    //             }
    //             left++
    //         } else {
    //             flag > 0 ? right-- : left++
    //         }
    //     }
    // }
    // return list

    const sortNum = nums.sort((a, b) => a - b)
    let list = []
    for (let i = 0; i < sortNum.length - 1; i++) {
        const leftVal = sortNum[i]
        let left = i + 1
        let right = sortNum.length - 1
        if (leftVal > 0) break
        if (i > 0 && sortNum[i] === sortNum[i - 1]) continue
        while(left < right) {
            const flag = sortNum[left] + sortNum[right] + leftVal
            if (flag == 0) {
                let arr = [leftVal, sortNum[left], sortNum[right]]
                list.push(arr)
                while (left < right && sortNum[left] == sortNum[left+1]) left++
                while (left < right && sortNum[right] == sortNum[right - 1]) right--
                left++
            } else {
                flag > 0 ? right-- : left++
            }
        }
    }
    return list
};


const nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))