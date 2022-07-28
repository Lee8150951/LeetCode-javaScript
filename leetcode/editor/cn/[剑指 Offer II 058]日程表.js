//leetcode submit region begin(Prohibit modification and deletion)

var MyCalendar = function() {
    this.event = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let [left, right] = [0, this.event.length]
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        const [e1, e2] = this.event[mid]
        if (start >= e2) {
            left = mid + 1
        } else if (end <= e1) {
            right = mid
        } else {
            return false
        }
    }
    this.event.splice(left, 0, [start, end])
    return true
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
//leetcode submit region end(Prohibit modification and deletion)
