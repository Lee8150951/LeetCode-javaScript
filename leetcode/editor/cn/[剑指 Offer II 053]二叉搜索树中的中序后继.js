//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let current = []
    let result;
    function dfs(node) {
        if (!node || result) return
        dfs(node.left)
        current.push(node)
        if (current[current.length - 2] === p) {
            result = node
        }
        dfs(node.right)
    }
    dfs(root)
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
