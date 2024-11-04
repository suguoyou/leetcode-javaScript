/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const list = s.split('')
    let newList = []
    for (let i = 0; i < list.length; i++) {
        const index = newList.findIndex(item => item.includes(list[i]))
        if (index > -1) {
            newList[index].push(list[i])
        } else {
            newList.push([list[i]])
        }
    }
    newList.sort((a, b) => b.length - a.length);
    return newList.reduce((pre, cur) => pre + cur.join(''), '')
};
// @lc code=end

