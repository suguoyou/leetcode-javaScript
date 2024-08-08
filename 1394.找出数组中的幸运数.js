/*
 * @lc app=leetcode.cn id=1394 lang=javascript
 *
 * [1394] 找出数组中的幸运数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let mapList = {}
    for (let i = 0; i < arr.length; i++) {
        mapList[arr[i]] = mapList[arr[i]] ? mapList[arr[i]] + 1 : 1
    }
    let list = Object.keys(mapList).filter(item => item == mapList[item])
    list.sort((a, b) => b - a)
    return list.length > 0 ? Number(list[0]) : -1
};
findLucky([2, 2, 3, 4])
// @lc code=end

