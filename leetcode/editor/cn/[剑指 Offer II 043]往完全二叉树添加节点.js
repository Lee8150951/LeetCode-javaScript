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
var CBTInserter = function(root) {
    this.head = root
    this.queue = [root]
    while(this.queue[0] && this.queue[0].left && this.queue[0].right) {
        let node = this.queue.shift()
        this.queue.push(node.left)
        this.queue.push(node.right)
    }
};

/** 
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
    const node = new TreeNode(v)
    let father = this.queue[0]
    if (father.left) {
        father.right = node
        this.queue.shift()
        this.queue.push(father.left, father.right)
    } else {
        father.left = node
    }
    return father.val
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.head
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */
//leetcode submit region end(Prohibit modification and deletion)
