//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let numberList = [], symbol = ["+", "-", "*", "/"]
    while (tokens.length > 0) {
        let current = tokens.shift()
        if (symbol.indexOf(current) === -1) {
            numberList.push(current)
        } else {
            let num1 = numberList.pop(), num2 = numberList.pop()
            let currentResult = parseInt(eval("(" + num2 + ")" + current + "(" + num1 + ")"))
            numberList.push(currentResult)
        }
    }
    return numberList[0]
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(evalRPN(["4","-2","/","2","-3","-","-"]))