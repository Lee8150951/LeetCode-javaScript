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
 */
var BSTIterator = function(root) {
    this.tree = root
    let list = []
    function dfs(node) {
        if (!node) return
        if (node.left) dfs(node.left)
        list.push(node.val)
        if (node.right) dfs(node.right)
    }
    dfs(root)
    this.treeList = list
    this.point = -1
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.point++
    return this.treeList[this.point]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if (this.treeList[this.point + 1] !== undefined) {
        return true
    } else {
        return false
    }
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
//leetcode submit region end(Prohibit modification and deletion)
