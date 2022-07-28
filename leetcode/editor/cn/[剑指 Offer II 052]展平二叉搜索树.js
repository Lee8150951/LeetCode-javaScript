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
var increasingBST = function(root) {
    let res = []
    let stack = []
    while (root) {
        stack.push(root)
        root = root.left
    }
    while (stack.length) {
        let node = stack.pop()
        res.push(node.val)
        node = node.right
        while (node) {
            stack.push(node)
            node = node.left
        }
    }
    let result = new TreeNode()
    let point = result
    for (const value of res) {
        point.right = new TreeNode(value)
        point = point.right
    }
    return result.right
};
//leetcode submit region end(Prohibit modification and deletion)
