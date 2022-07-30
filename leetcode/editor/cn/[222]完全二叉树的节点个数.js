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
var countNodes = function(root) {
    let num = 0
    function dfs(root) {
        if (!root) return
        num++
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return num
};
//leetcode submit region end(Prohibit modification and deletion)
