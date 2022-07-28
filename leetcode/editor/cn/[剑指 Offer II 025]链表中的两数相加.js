//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const [l1List, l2List] = [[], []]
    while (l1) {
        l1List.push(l1)
        l1 = l1.next
    }
    while (l2) {
        l2List.push(l2)
        l2 = l2.next
    }
    const len = Math.max(l1List.length, l2List.length);
    let one = 0;
    let result = null;
    for (let i = 0; i < len; i++){
        let x1 = l1List.length ? l1List.pop().val : 0;
        let x2 = l2List.length ? l2List.pop().val : 0;
        let sum = x1 + x2 + one;
        result = new ListNode(sum%10, result);
        one = Math.floor(sum / 10);
    }
    if (one) result = new ListNode(1, result);
    return result;
};
//leetcode submit region end(Prohibit modification and deletion)
