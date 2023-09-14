/* 
    给定两个由小写字母组成的字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

    示例 1：

    输入: s1 = "abc", s2 = "bca"
    输出: true 
    示例 2：

    输入: s1 = "abc", s2 = "bad"
    输出: false 
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
    const newS1 = [...s1].sort().toString()
    const newS2 = [...s2].sort().toString()
    console.log(newS1, newS2)
    return newS1 == newS2
};

let s1 = "abc", s2 = "bca"

console.log('flag', CheckPermutation(s1, s2));
