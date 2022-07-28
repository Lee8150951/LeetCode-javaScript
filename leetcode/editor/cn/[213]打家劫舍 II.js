//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0]
    const nums_head = nums.slice(1, nums.length)
    const nums_tail = nums.slice(0, nums.length - 1)
    return Math.max(robFunc(nums_head), robFunc(nums_tail))
};
const robFunc = function(nums) {
    if (nums.length === 1) return nums[0]
    const dp = []
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[nums.length - 1]
}
//leetcode submit region end(Prohibit modification and deletion)
