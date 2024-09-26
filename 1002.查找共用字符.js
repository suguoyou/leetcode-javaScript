/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找共用字符
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    if (words.length === 0) return []
    const list = words[0].split('')
    if (words.length === 1) return list
    let result = []
    for (let i = 0; i < list.length; i++) {
        let length = result.filter(item => item === list[i]).length + 1
        if (words.every(item => item.includes(list[i]) && length <= item.split('').filter(word => word === list[i]).length)) {
            result.push(list[i])
        }
    }
    return result
};
console.log(`===`, commonChars(["cool", "lock", "cook"]));

// @lc code=end

