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
var maxDepth = function(root) {
    let res = 0, queue = [root]
    if (!root) return res
    while (queue.length !== 0) {
        const length = queue.length
        for (let i = 0; i < length; i++) {
            const node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        res++
    }
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
