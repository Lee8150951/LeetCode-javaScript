//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let t = s.split("")
    for (let i = 0; i < s.length; i++) {
        if (t[i] === " ") t[i] = "%20"
    }
    return t.join("")
};
//leetcode submit region end(Prohibit modification and deletion)
replaceSpace("We are happy.")