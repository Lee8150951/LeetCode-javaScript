//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = []
    let path = []
    candidates.sort((a,b)=>a-b)
    function backtracking(j, sum) {
        if (sum === target) {
            result.push(Array.from(path))
            return
        }
        for(let i = j; i < candidates.length; i++ ) {
            const n = candidates[i]
            if(n > target - sum) break
            path.push(n)
            sum += n
            backtracking(i, sum)
            path.pop()
            sum -= n
        }
    }
    backtracking(0, 0)
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
