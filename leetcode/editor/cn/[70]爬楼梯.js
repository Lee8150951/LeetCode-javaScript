//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = [1, 1]
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    console.log(dp)
    return dp[n]
};
//leetcode submit region end(Prohibit modification and deletion)
climbStairs(3)