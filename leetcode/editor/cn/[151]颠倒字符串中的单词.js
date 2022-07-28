//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const t = s.split(" ")
    let res = ""
    for (let i = t.length - 1; i >= 0; i--) {
        if (t[i] !== "") {
            res += t[i] + " "
        }
    }
    return res.substring(0, res.length - 1)
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(reverseWords("  hello world  "))