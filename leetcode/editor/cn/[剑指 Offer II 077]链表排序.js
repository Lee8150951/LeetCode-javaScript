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
var sortList = function(head) {
    let list = new Array()
    while (head) {
        list.push(head.val)
        head = head.next
    }
    list.sort((a, b) => (a - b))
    let newHead = new ListNode(null, null)
    let point = newHead
    for (const i of list) {
        let node = new ListNode(i, null)
        point.next = node
        point = point.next
    }
    return newHead.next
};
//leetcode submit region end(Prohibit modification and deletion)
