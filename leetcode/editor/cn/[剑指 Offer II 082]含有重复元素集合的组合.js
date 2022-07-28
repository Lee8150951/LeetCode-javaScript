//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const [result, path] = [[], []]
    candidates.sort((a, b) => (a - b))
    function backtracking(candidates, target, startIndex) {
        let sum = path.reduce((a, b) => (a + b), 0)
        if (sum === target) {
            result.push([...path])
            return
        }
        if (sum >= target) {
            return
        }
        for (let i = startIndex; i < candidates.length; i++) {
            if (i > startIndex && candidates[i] === candidates[i - 1]) continue
            path.push(candidates[i])
            backtracking(candidates, target, i + 1)
            path.pop()
        }
    }
    backtracking(candidates, target, 0)
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
