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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let data = []
    while (head !== null) {
        data.push(head.val)
        head = head.next
    }
    let left = 0, right = data.length - 1
    while (left < right) {
        if (data[left] !== data[right]) return false
        left++
        right--
    }
    return true
};
//leetcode submit region end(Prohibit modification and deletion)
