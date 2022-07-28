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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let tHead = new ListNode(null, head);
    let slow = tHead, fast = tHead;
    while(n > 0 && fast !== null) {
        fast = fast.next;
        n--;
    }
    fast = fast.next;
    while(fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return tHead.next;
};
//leetcode submit region end(Prohibit modification and deletion)
