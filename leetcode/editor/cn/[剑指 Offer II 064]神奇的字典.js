//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    this.dict = []
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    this.dict = dictionary
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    for (let i = 0; i < this.dict.length; i++) {
        if (searchWord.length !== this.dict[i].length) continue
        let diff = 0
        for (let j = 0; j < searchWord.length; j++) {
            if (diff > 1) break
            if (searchWord[j] !== this.dict[i][j]) diff++
        }
        if (diff === 1) return true
    }
    return false
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
//leetcode submit region end(Prohibit modification and deletion)
