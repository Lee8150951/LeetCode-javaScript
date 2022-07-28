//leetcode submit region begin(Prohibit modification and deletion)

var RecentCounter = function() {
    this.pingList = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.pingList.push(t)
    while (this.pingList[0] < t - 3000) {
        this.pingList.shift()
    }
    return this.pingList.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
//leetcode submit region end(Prohibit modification and deletion)
