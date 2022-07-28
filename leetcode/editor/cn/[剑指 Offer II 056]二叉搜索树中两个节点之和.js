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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let nums = new Set()
    let q = [root]
    while (q.length !== 0) {
        const length = q.length
        for (let i  = 0; i < length; i++) {
            const node = q.shift()
            if (nums.has(k - node.val)) return true
            nums.add(node.val)
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
    }
    return false
};
//leetcode submit region end(Prohibit modification and deletion)
