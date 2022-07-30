//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function checkList(list) {
    let left = 0, right = list.length - 1
    while (left < right) {
        if (list[left] !== list[right]) return false
        left++
        right--
    }
    return true
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const queue = []
    if (!root) return true
    queue.push(root)
    while (queue.length) {
        const length = queue.length
        const cur = []
        for (let i = 0; i < length; i++) {
            const node = queue.shift()
            if (node === null) cur.push(null)
            else {
                cur.push(node.val)
                queue.push(node.left)
                queue.push(node.right)
            }
        }
        if (!checkList(cur)) return false
    }
    return true
};
//leetcode submit region end(Prohibit modification and deletion)
