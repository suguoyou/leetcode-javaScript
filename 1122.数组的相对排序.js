/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let map = new Map()
    let list = []
    for (let i = 0; i < arr1.length; i++) {
        const currentVal = arr1[i];
        const index = arr2.findIndex(item => item === currentVal)
        if (index === -1) {
            list.push(currentVal)
        } else {
            if (map.get(currentVal)) {
                arr2.splice(index, 0, currentVal)
            } else {
                map.set(currentVal, 1)
            }
        }
    }
    list.sort((a, b) => a - b)
    return arr2.concat(list)
};

console.log(`relativeSortArray`, relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));

// @lc code=end

