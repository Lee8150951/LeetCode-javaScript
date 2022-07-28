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
 * @return {number[]}
 */
// 迭代
var postorderTraversal = function(root) {
    let res = []
    if (!root) return res
    let stack = [root]
    while (stack.length !== 0) {
        let node = stack.pop()
        res.push(node.val)
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }
    res.reverse()
    return res
};
// 递归
postorderTraversal = function(root) {
    let res = []
    function dfs(root) {
        if (!root) return
        dfs(root.left)
        dfs(root.right)
        res.push(root.val)
    }
    dfs(root)
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
