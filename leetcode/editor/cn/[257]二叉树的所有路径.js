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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = []
    function backtracking(root, cur) {
        if (root.left === null && root.right === null) {
            cur += root.val
            res.push(cur)
            return
        }
        cur += `${root.val}->`
        if (root.left) backtracking(root.left, cur)
        if (root.right) backtracking(root.right, cur)
    }
    backtracking(root, "")
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
