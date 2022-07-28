//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        let num = Math.max(nums[i], nums[i] + dp[i - 1])
        dp.push(num)
    }
    console.log(dp)
    return Math.max(...dp)
};
//leetcode submit region end(Prohibit modification and deletion)
maxSubArray([-2,1,-3,4,-1,2,1,-5,4])