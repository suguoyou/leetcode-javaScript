/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    }
    const res = [];

    if (!digits) return res;
    const combination = (level, digits, str = '') => {
        if (level === digits.length) {
            res.push(str)
            return
        }
        const digitsArr = [...digits]
        const currentMap = map[digitsArr[level]]
        console.log('digitsArr', digitsArr, currentMap);
        currentMap.forEach(c => {
            combination(level + 1, digits, str + c)
        })
    }
    combination(0, digits, '');
    return res
};

console.log('letterCombinations', letterCombinations('23'));

// @lc code=end

