/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const map = new Map()
    const sArr = s.split('')
    const tArr = t.split('')
    if (sArr.length !== tArr.length) return false
    let arr = []
    for (let i = 0; i < sArr.length; i++) {
        if (map.has(sArr[i])) {
            if (map.get(sArr[i]) !== tArr[i]) {
                return false
            }
        } else {
            map.set(sArr[i], tArr[i])
            arr.push(tArr[i])
        }
    }

    return arr.length === [...new Set(arr)].length
};

const flag = isIsomorphic("badc", "baba")
console.log('flag', flag);
// @lc code=end

