//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.Store = new Map()
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.Store.set(key, val)
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let result = 0
    this.Store.forEach((value, key) => {
        let flag = true
        for (let i = 0; i < prefix.length; i++) {
            if (prefix[i] !== key[i]) {
                flag = false
            }
        }
        if (flag) result += value
    })
    return result
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
//leetcode submit region end(Prohibit modification and deletion)
