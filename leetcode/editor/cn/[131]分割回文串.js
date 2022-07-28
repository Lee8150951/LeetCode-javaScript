//leetcode submit region begin(Prohibit modification and deletion)
let judgement = function(s) {
    let [left, right] = [0, s.length - 1]
    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = []
    let path = []
    function backtracking(s, startIndex) {
        if (startIndex === s.length) {
            result.push([...path])
            return
        }
        for (let i = startIndex; i < s.length; i++) {
            let subString = s.substring(startIndex, i + 1)
            if (judgement(subString)) path.push(subString)
            else continue
            backtracking(s, i + 1)
            path.pop()
        }
    }
    backtracking(s, 0)
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
