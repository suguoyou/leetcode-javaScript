/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  //   if (strs.length <= 1) {
  //     return strs.length == 1 ? strs[0] : "";
  //   }
  //   let length = strs.reduce((acc, cur, index) => {
  //     if (index == 0) return cur.length;
  //     return acc > cur.length ? cur.length : acc;
  //   }, 0);
  //   if (length < 2) {
  //     let flag = strs.every((item) => strs[0].slice(0, 1) == item.slice(0, 1));
  //     return flag ? strs[0].slice(0, 1) : ''
  //   }
  //   for (let i = 0; i < length; i++) {
  //     let str = strs[0].slice(0, length - i);
  //     let flag = strs.every((item) => str == item.slice(0, length - i));
  //     if (flag) {
  //       return str;
  //     }
  //   }
  //   return "";
  const lens = strs.map((str) => str.length);
  const minLen = Math.min(...lens);
  const minStr = strs[lens.indexOf(minLen)];
  let index = 0,
    prefix = "";
  while (index < minLen) {
    if (strs.some((item) => item[index] !== minStr[index])) {
      break;
    }
    prefix += minStr[index];
    index++;
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
