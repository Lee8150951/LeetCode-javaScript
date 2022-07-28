//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const array = new Array(26).fill(0)
    for (const i of s) {
        array[i.charCodeAt() - "a".charCodeAt()] += 1
    }
    for (const i of t) {
        if (!array[i.charCodeAt() - "a".charCodeAt()]) return false
        array[i.charCodeAt() - "a".charCodeAt()] -= 1
    }
    const sum = array.reduce((a, b) => (a + b))
    return sum === 0
};
//leetcode submit region end(Prohibit modification and deletion)
