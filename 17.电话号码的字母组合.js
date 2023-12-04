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
    const arr = [];
    if (!digits) return []
    const combinations = (str, digits = '') => {
        if (!digits) return arr.push(str)
        const firstStr = digits.slice(0, 1)
        const newArr = map[firstStr]
        for (let i = 0; i < newArr.length; i++) {
            combinations(str + newArr[i], digits.substring(1))
        }
    }
    combinations('', digits)
    return arr
};

letterCombinations('398')

// @lc code=end

