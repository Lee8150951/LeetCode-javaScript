//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s.length % 2) return false
    let stack = []
    for (let i of s) {
        if (i === ")") {
            if (stack.pop() !== "(") return false
        }
        else if (i === "]") {
            if (stack.pop() !== "[") return false
        }
        else if (i === "}") {
            if (stack.pop() !== "{") return false
        }
        else {
            stack.push(i)
        }
    }
    return stack.length === 0
};
//leetcode submit region end(Prohibit modification and deletion)
