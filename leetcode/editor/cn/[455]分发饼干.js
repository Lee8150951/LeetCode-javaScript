//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => b - a)
    s.sort((a, b) => b - a)
    let point = 0, result = 0
    for (let i = 0; i < g.length; i++) {
        if (g[i] >= s[point] && point < s.length) {
            result++
            point++
        }
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
