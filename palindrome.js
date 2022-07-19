/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // ```
  //   let str = x + "";
  //   let strArr = str.split("");
  //   let reverseArr = strArr.reverse();
  //   let reverseStr = reverseArr.join("");
  //   return x == reverseStr;
  //   ```
  //   return String(x) === String(x).split("").reverse().join("") ? true : false;
  //   ```
  let arr = String(x).split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121));
