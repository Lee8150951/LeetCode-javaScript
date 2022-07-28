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
var largestValues = function(root) {
    if (!root) return []
    let nums = []
    let q = [root]
    while (q.length !== 0) {
        const length = q.length
        nums.push([])
        for (let i = 0; i < length; i++) {
            let node = q.shift()
            nums[nums.length - 1].push(node.val)
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
    }
    let result = []
    for (let i = 0; i < nums.length; i++) {
        nums[i].sort((a, b) => (b - a))
        result.push(nums[i][0])
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
