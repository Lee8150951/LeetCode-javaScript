//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => (Math.abs(a) - Math.abs(b)))
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < 0) {
            if (k > 0) k--
            else break
            nums[i] = -nums[i]
        }
    }
    while (true) {
        if (k === 0) break
        k--
        nums[0] = -nums[0]
    }
    console.log(nums)
    return nums.reduce((a, b) => (a + b))
};
//leetcode submit region end(Prohibit modification and deletion)
