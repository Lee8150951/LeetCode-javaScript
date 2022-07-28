//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    return s.substr(n) + s.substr(0, n)
};
//leetcode submit region end(Prohibit modification and deletion)
