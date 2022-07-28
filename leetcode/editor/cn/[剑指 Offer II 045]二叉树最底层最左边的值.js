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
var findBottomLeftValue = function(root) {
    let treeList = []
    let p = [root]
    while (p.length !== 0) {
        const length = p.length
        treeList.push([])
        for (let i = 0; i < length; i++) {
            const node = p.shift()
            treeList[treeList.length - 1].push(node.val)
            if (node.left) p.push(node.left)
            if (node.right) p.push(node.right)
        }
    }
    return treeList[treeList.length - 1][0]
};
//leetcode submit region end(Prohibit modification and deletion)
