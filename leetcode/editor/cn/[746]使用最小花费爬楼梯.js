//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp = [cost[0], cost[1]]
    let length = cost.length
    for (let i = 2; i < length; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
    }
    console.log(dp)
    return Math.min(dp[length - 1], dp[length - 2])
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))