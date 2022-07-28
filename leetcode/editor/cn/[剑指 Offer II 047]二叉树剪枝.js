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
var pruneTree = function(root) {
    if (root == null) return root
    root.left = pruneTree(root.left)
    root.right = pruneTree(root.right)
    // 当左右节点都为空且当前节点的值为0的情况下，即可剪枝
    if (!root.left && !root.right && root.val === 0) {
        return null;
    }
    return root;
};
//leetcode submit region end(Prohibit modification and deletion)
