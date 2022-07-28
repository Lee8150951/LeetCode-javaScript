//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let ListNodeSet = new Set()
    let temp = headA
    while (temp !== null) {
        ListNodeSet.add(temp)
        temp = temp.next
    }
    temp = headB
    while (temp !== null) {
        if (ListNodeSet.has(temp)) {
            return temp
        }
        temp = temp.next
    }
    return null
};
//leetcode submit region end(Prohibit modification and deletion)
