//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map()
    this.capacity = capacity
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const { cache } = this
    if(!cache.has(key)){
        return -1
    }
    const val = cache.get(key)
    cache.delete(key)
    cache.set(key, val)
    return val
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const { cache, capacity } = this
    if(cache.has(key)){
        cache.delete(key)
    }
    if(cache.size === capacity){
        const it = cache.keys()
        cache.delete(it.next().value)
    }
    cache.set(key,value)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
//leetcode submit region end(Prohibit modification and deletion)
