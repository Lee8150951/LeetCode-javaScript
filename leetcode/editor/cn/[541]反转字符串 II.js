//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let remain = s.length % (2 * k)
    let res = ""
    for (let i = 0; i < Math.floor(s.length / (2 * k)); i++) {
        res += reverseSub(s.substr(i * 2 * k, k)) + s.substr(i * 2 * k + k, k)
    }
    if (remain <= k) {
        res += reverseSub(s.substr(s.length - remain))
    }
    else {
        res += reverseSub(s.substr(s.length - remain, k)) + s.substr(s.length - remain + k, k)
    }
    return res
};
let reverseSub = function(s) {
    return s.split("").reverse().join("")
}
//leetcode submit region end(Prohibit modification and deletion)
