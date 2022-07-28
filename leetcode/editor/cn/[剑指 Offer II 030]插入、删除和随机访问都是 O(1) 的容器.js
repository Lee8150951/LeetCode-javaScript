//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.dataBase = new Set()
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.dataBase.has(val)) {
        return false
    } else {
        this.dataBase.add(val)
        return true
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.dataBase.has(val)) {
        this.dataBase.delete(val)
        return true
    } else {
        return false
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let length = this.dataBase.size
    let position = Math.floor(Math.random() * length + 1)
    return [...this.dataBase][position]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
//leetcode submit region end(Prohibit modification and deletion)
