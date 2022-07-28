//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    const dp = new Array(nums.length).fill(1)
    let result = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1
        }
        result = Math.max(result, dp[i])
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(findLengthOfLCIS([1,3,5,4,7]))