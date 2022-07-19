// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 例如， 罗马数字 2 写做 II ，即为两个并列的 1 。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

// 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  //   let arr = s.split("");
  //   return arr.reduce((acc, cur, index) => {
  //     if (cur === "I" && arr[index + 1] !== "V" && arr[index + 1] !== "X") {
  //       acc = acc = acc + 1;
  //     } else if (
  //       cur === "I" &&
  //       (arr[index + 1] == "V" || arr[index + 1] == "X")
  //     ) {
  //       acc = acc - 1;
  //     } else if (cur === "V") {
  //       acc = acc + 5;
  //     } else if (
  //       cur === "X" &&
  //       arr[index + 1] !== "L" &&
  //       arr[index + 1] !== "C"
  //     ) {
  //       acc = acc + 10;
  //     } else if (
  //       cur === "X" &&
  //       (arr[index + 1] == "L" || arr[index + 1] == "C")
  //     ) {
  //       acc = acc - 10;
  //     } else if (cur === "L") {
  //       acc = acc + 50;
  //     } else if (
  //       cur === "C" &&
  //       arr[index + 1] !== "D" &&
  //       arr[index + 1] !== "M"
  //     ) {
  //       acc = acc + 100;
  //     } else if (
  //       cur === "C" &&
  //       (arr[index + 1] == "D" || arr[index + 1] == "M")
  //     ) {
  //       acc = acc - 100;
  //     } else if (cur === "D") {
  //       acc = acc + 500;
  //     } else if (cur === "M") {
  //       acc = acc + 1000;
  //     }
  //     return acc;
  //   }, 0);
  let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let strArr = s.split("").reverse();
  return strArr.reduce((acc, cur, index) => {
    if (index == 0) {
      acc = acc + map[cur];
      return acc;
    }
    if (map[cur] < map[strArr[index - 1]]) {
      acc = acc - map[cur];
    } else {
      acc = acc + map[cur];
    }
    return acc;
  }, 0);
};

console.log(romanToInt("III"));
