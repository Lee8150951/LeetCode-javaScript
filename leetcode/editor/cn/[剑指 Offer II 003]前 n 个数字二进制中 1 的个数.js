//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let dp = [0, 1]
    if (n === 0) return [0]
    if (n === 1) return dp
    let position = 0
    for (let i = 2; i <= n; i++) {
        if ((i & (i-1)) === 0) {
            position = 0
            dp.push(dp[position] + 1)
        } else {
            position += 1
            dp.push(dp[position] + 1)
        }
    }
    return dp
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(countBits(5))