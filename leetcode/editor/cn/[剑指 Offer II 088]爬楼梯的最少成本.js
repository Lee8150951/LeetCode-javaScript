//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp = new Array(cost.length + 1).fill(0)
    for (let i = 2; i <= cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    }
    return dp[cost.length]
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(minCostClimbingStairs([10, 15, 20]))