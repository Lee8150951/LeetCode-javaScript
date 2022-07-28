//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = []
    if (!root) return []
    let q = [root]
    while (q.length !== 0) {
        const currentLength = q.length
        result.push([])
        for (let i = 0; i < currentLength; i++) {
            const node = q.shift()
            result[result.length - 1].push(node.val)
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
