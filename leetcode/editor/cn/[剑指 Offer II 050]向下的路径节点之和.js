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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if (!root) return 0
    let res = 0
    function dfs (node, need) {
        if (!node) return
        need -= node.val
        if (need === 0) res++
        dfs(node.left, need)
        dfs(node.right, need)
    }
    dfs(root, targetSum)
    return res + pathSum(root.left, targetSum) + pathSum(root.right, targetSum)
};
//leetcode submit region end(Prohibit modification and deletion)
