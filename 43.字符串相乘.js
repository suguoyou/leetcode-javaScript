/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    // let list = []
    // if (num1 == '0' || num2 == '0') return '0'
    // for (let i = num1.length - 1; i >= 0; i--) {
    //     let sum = new Array(num1.length - 1 - i).fill(0)
    //     let decile = 0
    //     for (let j = num2.length - 1; j >= 0; j--) {
    //         let res = num1[i] * num2[j] + decile
    //         sum.push(res % 10)
    //         decile = Math.floor(res / 10)
    //     }
    //     if (decile) sum.push(decile)
    //     list.unshift(sum)
    // }
    // let lastList = list[0]
    // let str = []
    // let decile = 0
    // for (let i = 0; i < lastList.length; i++) {
    //     let total = list.reduce((acc, cur) => acc += cur[i] ? cur[i] : 0, 0) + decile
    //     str.unshift(total % 10)
    //     decile = Math.floor(total / 10)
    // }
    // if (decile) str.unshift(decile)
    // str = str.join('')
    // return str

    if (num1 == '0' || num2 == '0') return '0'
    let n1 = num1.length,
        n2 = num2.length,
        res = new Array(n1 + n2).fill(0)

    for (var i = n1 - 1; i >= 0; i--) {
        for (var j = n2 - 1; j >= 0; j--) {
            let mul = Number(num1[i]) * Number(num2[j])
            let p1 = i + j,
                p2 = i + j + 1
            let sum = mul + res[p2]
            res[p1] += Math.floor(sum / 10)
            res[p2] = sum % 10
        }
    };
    if (res[0] === 0) res.shift()
    return res.join('')
}

const total = multiply('123456789', '987654321')
console.log(`===`, total);
// @lc code=end

