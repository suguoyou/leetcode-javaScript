/* 
    面试题 01.01. 判定字符是否唯一
    简单
    相关标签
    相关企业
    提示
    实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

    示例 1：

    输入: s = "leetcode"
    输出: false  
*/

/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    // let uniqueMap = new Map()

    // for (let i = 0; i < astr.length; i++) {
    //     if (uniqueMap.has(astr[i])) {
    //         return false
    //     } else {
    //         uniqueMap.set(astr[i], 1)
    //     }
    // }
    // return true
    return new Set(astr).size == astr.length
};
let s = "leetcode"
const flag = isUnique(s)
console.log('flag', flag);
