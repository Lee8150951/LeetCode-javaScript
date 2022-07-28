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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let res = new ListNode(0, head)
    let point = res
    while (point.next) {
        if (point.next.val === val) {
            point.next = point.next.next
            continue
        }
        point = point.next
    }
    return res.next
};
//leetcode submit region end(Prohibit modification and deletion)
