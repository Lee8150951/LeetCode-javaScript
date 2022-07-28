//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 动态规划解法（和416相同）
var canPartition = function(nums) {
    let sum = nums.reduce((a, b) => a + b)
    if (sum % 2 !== 0) return false
    sum /= 2
    const dp = new Array(nums.length).fill(0).map(() => new Array(sum + 1).fill(0))
    for (let i = 0; i <= sum; i++) {
        if (i >= nums[0]) dp[0][i] = nums[0]
    }
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j <= sum; j++) {
            if (j < nums[i]) dp[i][j] = dp[i - 1][j]
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - nums[i]] + nums[i])
            if (dp[i][j] === sum) return true
        }
    }
    return false
};
// 回溯（超时，使用全子集的方法）
canPartition = function(nums) {
    const path = []
    let result = false
    let sum = nums.reduce((a, b) => a + b)
    if (sum % 2 !== 0) return false
    sum /= 2
    function backtracking(nums, startIndex) {
        if (path.reduce((a, b) => a + b, 0) === sum) result = true
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i])
            backtracking(nums, i + 1)
            path.pop()
        }
    }
    backtracking(nums, 0)
    return result
}
//leetcode submit region end(Prohibit modification and deletion)
canPartition([1,5,11,5])