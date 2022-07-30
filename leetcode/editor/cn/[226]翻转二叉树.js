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
var invertTree = function(root) {
    const invertNode = function(root, left, right){
        let temp = left
        left = right
        right = temp
        root.left = left
        root.right = right
    }
    //使用层序遍历
    let queue = []
    if(!root) return root
    queue.push(root)
    while(queue.length) {
        let length = queue.length
        while(length--) {
            let node = queue.shift()
            //节点处理逻辑
            invertNode(node, node.left, node.right)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return root
};
//leetcode submit region end(Prohibit modification and deletion)
