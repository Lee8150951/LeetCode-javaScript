//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let dp = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
    }
    console.log(dp)
    return dp[n]
};
//leetcode submit region end(Prohibit modification and deletion)
tribonacci(4)