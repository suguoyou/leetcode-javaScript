/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    const len01 = word1.split('');
    const len02 = word2.split('');

    const MoreWorld = len01.length > len02.length ? len01 : len02;
    let str = ''
    for (let i = 0; i < MoreWorld.length; i++) {
        str += `${len01[i] ?? ''}${len02[i] ?? ''}`;
    }

    return str;
};

const str = mergeAlternately('ab', 'pqcd')// @lc code=end

console.log(str)