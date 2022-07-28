//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.nums = []
    this.length = size
    this.sum = 0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.nums.length < this.length) {
        this.sum += val
        this.nums.push(val)
    } else {
        this.sum -= this.nums.shift()
        this.sum += val
        this.nums.push(val)
    }
    return this.sum / this.nums.length
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
//leetcode submit region end(Prohibit modification and deletion)
