//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head
    let node = new ListNode(0, head)
    let mid = head, right = head.next, store = null, left = node
    while (true) {
        store = right.next
        mid.next = store
        right.next = mid
        left.next = right

        if (!mid.next || !mid.next.next) break
        left = mid
        mid = mid.next
        right = mid.next
    }
    return node.next
};
//leetcode submit region end(Prohibit modification and deletion)
