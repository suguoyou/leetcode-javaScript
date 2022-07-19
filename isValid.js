/* 
    给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

    有效字符串需满足：

    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。 
*/
// s 仅由括号 '()[]{}' 组成
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let list = ["{", "(", "["];
  let result = ["()", "[]", "{}"];
  for (let i = 0; i < s.length; i++) {
    if (list.includes(s[i])) {
      stack.push(s[i]);
    } else if (result.includes(stack[stack.length - 1] + s[i])) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length == 0;
};
