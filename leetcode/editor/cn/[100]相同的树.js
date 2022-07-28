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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // 如果两棵树都为null，返回true
    if (p === null && q === null) return true
    // 如果其中一棵树为null，另一棵树不为null，返回false
    if (p === null || q === null) return false
    // 如果同一层节点值不同，返回false
    if (p.val !== q.val) return false
    // 递归判断子树情况Ï
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
//leetcode submit region end(Prohibit modification and deletion)
