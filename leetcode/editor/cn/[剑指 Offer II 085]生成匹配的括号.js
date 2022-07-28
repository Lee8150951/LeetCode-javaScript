//leetcode submit region begin(Prohibit modification and deletion)
let checkBrackets = function (brackets) {
    let stack = []
    for (let i of brackets) {
        if (i === ")") {
            if (stack.indexOf("(") !== -1) stack.pop()
            else return false
        }
        else stack.push("(")
    }
    return stack.length === 0;
}
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const [path, result, brackets] = [[], [], ["(", ")"]]
    function backtracking(n) {
        if (path.length === n * 2) {
            if (checkBrackets(path)) result.push(path.join(""))
            return
        }
        for (let i = 0; i < 2; i++) {
            path.push(brackets[i])
            backtracking(n)
            path.pop()
        }
    }
    backtracking(n)
    return result
};

// 优解
generateParenthesis = function(n) {
    const result = []
    function backtracking(left, right, str) {
        if (left === n && right === n) {
            result.push(str)
            return
        }
        if (left < n) backtracking(left + 1, right, str + "(")
        if (right < left) backtracking(left, right + 1, str + ")")
    }
    backtracking(0, 0, "")
    return result
}
//leetcode submit region end(Prohibit modification and deletion)