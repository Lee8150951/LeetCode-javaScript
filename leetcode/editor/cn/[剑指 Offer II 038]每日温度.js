//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 双指针
var dailyTemperatures = function(temperatures) {
    let result = [], flag = 0
    for (let i = 0; i < temperatures.length - 1; i++) {
        flag = 0
        for (let j = i; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                result.push(j - i)
                flag = 1
                break
            }
        }
        if (flag === 0) {
            result.push(0)
        }
    }
    result.push(0)
    return result
};
// 单调栈
dailyTemperatures = function (temperatures) {
    let stack = [], result = new Array(temperatures.length).fill(0)
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let position = stack.pop()
            result[position] = i - position
        }
        stack.push(i)
    }
    return result
}
//leetcode submit region end(Prohibit modification and deletion)
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))