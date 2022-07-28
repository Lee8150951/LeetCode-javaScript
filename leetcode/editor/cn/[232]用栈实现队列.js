//leetcode submit region begin(Prohibit modification and deletion)

var MyQueue = function() {
    this.queque = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queque.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let res = this.queque[0]
    for (let i = 1; i < this.queque.length; i++) {
        this.queque[i - 1] = this.queque[i]
    }
    this.queque.pop()
    return res
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queque[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queque.length === 0;

};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
//leetcode submit region end(Prohibit modification and deletion)
