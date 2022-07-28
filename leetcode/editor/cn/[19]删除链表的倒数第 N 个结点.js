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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let point_01 = head, length = 1
    while(point_01.next) {
        point_01 = point_01.next
        length++
    }
    let node = new ListNode(0, head), point_02 = node
    for (let i = 0; i < length - n; i++) {
        point_02 = point_02.next
    }
    point_02.next = point_02.next.next
    return node.next
};
//leetcode submit region end(Prohibit modification and deletion)
