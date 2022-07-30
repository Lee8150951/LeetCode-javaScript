//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let res = 0, queue = []
    if (!root) return res
    queue.push(root)
    while (queue.length) {
        const length = queue.length
        for (let i = 0; i < length; i++) {
            const node = queue.shift()
            if (node.left) {
                if (!node.left.left && !node.left.right) res += node.left.val
                queue.push(node.left)
            }
            if (node.right) queue.push(node.right)
        }
    }
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
