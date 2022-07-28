//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head, slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) return true
    }
    return false
};
//leetcode submit region end(Prohibit modification and deletion)
