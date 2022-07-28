//leetcode submit region begin(Prohibit modification and deletion)

var Trie = function() {
    this.trie = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.trie
    for (const c of word) {
        if (!node[c]) node[c] = {}
        node = node[c]
    }
    node.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const result = this.findPrefix(word)
    return result !== false && result.isEnd === true
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.findPrefix(prefix)
};

Trie.prototype.findPrefix = function(prefix) {
    let node = this.trie
    for (const c of prefix) {
        if (!node[c]) return false
        node = node[c]
    }
    return node
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
//leetcode submit region end(Prohibit modification and deletion)
