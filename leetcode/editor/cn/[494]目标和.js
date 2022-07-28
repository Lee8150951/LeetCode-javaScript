//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let sum = nums.reduce((a, b) => a + b)
    if(Math.abs(target) > sum) return 0
    if ((target + sum) % 2 !== 0) return 0
    target = (target + sum) / 2
    let dp = new Array(target + 1).fill(0)
    dp[0] = 1
    for(let i = 0; i < nums.length; i++) {
        for(let j = target; j >= nums[i]; j--) {
            dp[j] = dp[j - nums[i]] + dp[j]
        }
    }
    return dp[target]
};
//leetcode submit region end(Prohibit modification and deletion)
findTargetSumWays(nums = [1,1,1,1,1], target = 3)