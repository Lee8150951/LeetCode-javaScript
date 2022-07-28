//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const dict = new Array(26).fill(0)
    for (let i of ransomNote) {
        dict[i.charCodeAt() - "a".charCodeAt()] += 1
    }
    for (let i of magazine) {
        if (dict[i.charCodeAt() - "a".charCodeAt()]) {
            dict[i.charCodeAt() - "a".charCodeAt()]--
        }
    }
    return dict.reduce((a, b) => a + b) === 0
};
//leetcode submit region end(Prohibit modification and deletion)
