//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let str = ""
    for (let i = 0; i < s.length - 1; i++) {
        str += s[i]
        if (s === str.repeat(Math.floor(s.length / str.length))) return true
    }
    return false
};
//leetcode submit region end(Prohibit modification and deletion)
