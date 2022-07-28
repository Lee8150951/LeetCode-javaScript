//leetcode submit region begin(Prohibit modification and deletion)
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [], queue = []
    if (!root) return res
    queue.push(root)
    while (queue.length !== 0) {
        const length = queue.length
        const cur = []
        for (let i = 0; i < length; i++) {
            const node = queue.shift()
            cur.push(node.val)
            for (const i of node.children) {
                queue.push(i)
            }
        }
        res.push(cur)
    }
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
