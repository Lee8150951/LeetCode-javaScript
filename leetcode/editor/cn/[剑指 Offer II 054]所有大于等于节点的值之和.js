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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    if (!root) return root
    let sum = 0
    function dfs(node) {
        if (!node) return
        if (node.right) dfs(node.right)
        sum += node.val
        node.val = sum
        if (node.left) dfs(node.left)
    }
    dfs(root)
    return root
};
//leetcode submit region end(Prohibit modification and deletion)
