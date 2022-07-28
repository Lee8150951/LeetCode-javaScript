//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    const sum = stones.reduce((a, b) => a + b)
    const half = Math.floor(sum / 2)
    let dp = new Array(half + 1).fill(0)

    for (let i = 0; i < stones.length; i++) {
        for (let j = half; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j - stones[i]] + stones[i], dp[j])
        }
    }
    console.log(dp)
    return sum - dp[half] * 2
};
//leetcode submit region end(Prohibit modification and deletion)
