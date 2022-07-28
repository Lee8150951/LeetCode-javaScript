//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1)
    for (let i = 0; i <= amount; i++) {
        if (i % coins[0]) dp[i] = false
        else dp[i] = i / coins[0]
    }
    for (let i = 1; i < coins.length; i++) {
        for (let j = 0; j <= amount; j++) {
            if (j >= coins[i]) {
                let [fontRes, thisRes] = [true, true]
                if (dp[j - coins[i]] === false) fontRes = false
                if (dp[j] === false) thisRes = false
                if (thisRes && fontRes) dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
                else if (thisRes) dp[j] = dp[j]
                else if (fontRes) dp[j] = dp[j - coins[i]] + 1
                else dp[j] = false
            }
        }
    }
    console.log(dp)
    return dp[amount]
};
//leetcode submit region end(Prohibit modification and deletion)
coinChange([2, 5], 11)