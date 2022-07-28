//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = []
    let path = []
    function backtracking(n, k, startIndex) {
        if (path.length === k) {
            result.push([...path])
            return
        }
        for (let i = startIndex; i < n; i++) {
            path.push(i)
            backtracking(n, k, i + 1)
            path.pop()
        }
    }
    backtracking(n, k, 1)
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
