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
var rightSideView = function(root) {
    if (!root) return[]
    let result = []
    let treeList = []
    let q = [root]
    while (q.length !== 0) {
        const length = q.length
        treeList.push([])
        for (let i = 0; i < length; i++) {
            const node = q.shift()
            treeList[treeList.length - 1].push(node.val)
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
    }
    treeList.forEach((value) => {
        result.push(value[value.length - 1])
    })
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
