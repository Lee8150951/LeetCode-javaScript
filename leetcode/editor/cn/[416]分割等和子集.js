//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((a, b) => a + b, 0)
    if (sum % 2 !== 0) return false
    sum /= 2
    const dp = new Array(nums.length).fill(0).map(() => new Array(sum + 1).fill(0))
    for (let i = 0; i < dp[0].length; i++) {
        if (i >= nums[0]) {
            dp[0][i] = nums[0]
        }
    }
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < sum + 1; j++) {
            if (nums[i] > j) dp[i][j] = dp[i - 1][j]
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - nums[i]] + nums[i])
            if (dp[i][j] === sum) return true
        }
    }
    return false
};
//leetcode submit region end(Prohibit modification and deletion)
canPartition([1,5,11,5])