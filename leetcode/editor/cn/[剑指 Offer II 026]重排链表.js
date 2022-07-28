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
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 通过数组存储后重排
var reorderList = function(head) {
    let nodeList = []
    let point = head
    while (point) {
        nodeList.push(point)
        point = point.next
    }
    let [i, j] = [0, nodeList.length - 1]
    while (i < j) {
        nodeList[i].next = nodeList[j]
        i++
        nodeList[j].next = nodeList[i]
        j--
    }
    nodeList[i].next = null
};
let reverseList = function (head) {
    let pre = null
    let current = head
    while (current) {
        let temp = current.next
        current.next = pre
        pre = current
        current = temp
    }
    return pre
}
let combineList = function (list1, list2) {
    let point = list1
    while (point.next !== null && list2.next !== null) {
        let list1_remain = list1.next
        let list2_remain = list2.next
        point.next = list2
        point.next.next = list1_remain
        list2 = list2_remain
        point = point.next.next
    }
}
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
reorderList = function(head) {
    let dummy = new ListNode(0, head)
    // 快慢指针确认中间节点
    let [slow, fast] = [dummy, dummy]
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next
        if (fast.next) {
            fast = fast.next
        }
    }
    // 后半段反转
    let temp = slow.next
    slow.next = null
    // 两端拼接
    let left = dummy.next
    let right = reverseList(temp)
    while (left && right) {
        let lNext = left.next
        let rNext = right.next
        right.next = left.next
        left.next = right
        left = lNext
        right = rNext
    }
};
//leetcode submit region end(Prohibit modification and deletion)
