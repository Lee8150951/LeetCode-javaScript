//leetcode submit region begin(Prohibit modification and deletion)
/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {    let insertNode = new Node(insertVal, null)
    if (head === null) {
        insertNode.next = insertNode
        return insertNode
    }
    if (head.next === head) {
        head.next = insertNode
        insertNode.next = head
    }
    let point = head
    let set = new Set()
    while (!set.has(point)) {
        set.add(point)
        point = point.next
    }
    let list = [...set].sort((a, b) => (a.val - b.val))
    if (list[0].val >= insertVal) {
        let iNext = list[list.length - 1].next
        list[list.length - 1].next = insertNode
        insertNode.next = iNext
    }
    list.push(new Node(Number.MAX_VALUE, null))
    for (let i = 0; i < list.length; i++) {
        if (list[i].val < insertVal && list[i + 1].val >= insertVal) {
            let iNext = list[i].next
            list[i].next = insertNode
            insertNode.next = iNext
        }
    }
    return head
};
//leetcode submit region end(Prohibit modification and deletion)
