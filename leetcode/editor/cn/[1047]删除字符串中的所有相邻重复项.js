//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = []
    for (const char of s) {
        if (stack[stack.length - 1] === char) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    return stack.join("")
};
//leetcode submit region end(Prohibit modification and deletion)
