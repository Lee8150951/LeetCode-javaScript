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
var sumNumbers = function(root) {
    const dfs = function(root, path) {
        if (root === null) return 0
        path = path * 10 + root.val
        if (!root.left && !root.right) return path
        return dfs(root.left, path) + dfs(root.right, path)
    }
    return dfs(root, 0)
};
//leetcode submit region end(Prohibit modification and deletion)
