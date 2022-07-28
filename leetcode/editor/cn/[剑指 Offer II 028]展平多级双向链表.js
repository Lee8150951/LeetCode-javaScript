//leetcode submit region begin(Prohibit modification and deletion)
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
function Node(val,prev,next,child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
};
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if(!head) return head;
    let curr = head;
    let stack = [];
    while(stack.length || curr.child || curr.next){
        if(curr.child){//存在子节点
            stack.push(curr.next);
            curr.next = curr.child;
            curr.child.prev = curr;
            curr.child = null;
            curr = curr.next;
        }
        else if(curr.next && !curr.child)//无子节点有临节点
            curr = curr.next;
        else if(!curr.next && !curr.child){//无子节点栈不为空
            let node = stack.pop();
            while(!node && stack.length){
                node = stack.pop();
            }
            if(node){
                curr.next = node;
                node.prev = curr;
                curr = curr.next;
            }

        }
    }
    return head;
};
//leetcode submit region end(Prohibit modification and deletion)
