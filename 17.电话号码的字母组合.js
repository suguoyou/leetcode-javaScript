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
    let arr = digits.split('')
    let newArr = []
    arr = arr.reduce((acc, cur) => {
        acc.push(mapTel(cur))
        return acc
    }, [])
    let flagIndex = 0
    arr.forEach(item => {

    })
    console.log(arr)

    function mapTel(num) {
        const obj = {
            2: ['a', 'b', 'c'],
            3: ['d', 'e', 'f'],
            4: ['g', 'h', 'i'],
            5: ['j', 'k', 'l'],
            6: ['m', 'n', 'o'],
            7: ['p', 'q', 'r', 's'],
            8: ['t', 'u', 'v'],
            9: ['w', 'x', 'y', 'z']
        }
        return obj[num]
    }
};

letterCombinations('23')

// @lc code=end

