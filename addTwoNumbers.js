/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (Array.isArray(l1) && Array.isArray(l2)) {
    var num1 = Number(l1.reverse().join(""));
    var num2 = Number(l2.reverse().join(""));
    let num = num1 + num2 + "";
    return num.split("").reverse();
  }
};

var l1 = [9, 9, 9, 9, 9, 9, 9],
  l2 = [9, 9, 9, 9];

console.log(addTwoNumbers(l1, l2));
