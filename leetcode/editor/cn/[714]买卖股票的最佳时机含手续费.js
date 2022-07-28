//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let dp = Array.from(Array(prices.length), () => Array(2).fill(0));
    dp[0][0] = 0 - prices[0];
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
        dp[i][1] = Math.max(dp[i - 1][0] + prices[i] - fee, dp[i - 1][1]);
    }
    return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][1]);
};
//leetcode submit region end(Prohibit modification and deletion)
