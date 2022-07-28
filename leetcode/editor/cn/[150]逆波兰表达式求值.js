//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    for (const char of tokens) {
        if (char === "+") stack.push(stack.pop() + stack.pop())
        else if (char === "-") {
            let a = stack.pop(), b = stack.pop()
            stack.push(b - a)
        }
        else if (char === "*") stack.push(stack.pop() * stack.pop())
        else if (char === "/") {
            let a = stack.pop(), b = stack.pop()
            stack.push(parseInt(b / a))
        }
        else stack.push(parseInt(char))
    }
    return stack[0]
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))