//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
// 动态规划解法
var fib = function(n) {
    const dp = [0, 1]
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 2] + dp[i - 1]
    }
    console.log(dp)
    return dp[n]
};
// 递归算法
fib = function(n) {
    if (n < 2) return n
    return fib(n - 1) + fib( n - 2)
}
//leetcode submit region end(Prohibit modification and deletion)
fib(10)