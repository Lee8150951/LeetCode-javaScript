//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let preSum = new Map(), sum = 0, result = nums.length + 1
    preSum.set(-1, 0)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        preSum.set(i, sum)
        for (let j = i - 1; j >= -1; j--) {
            if (sum - preSum.get(j) >= target) {
                result = Math.min(result, i - j)
            }
        }
    }
    return result === nums.length + 1 ? 0 : result
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(minSubArrayLen(11,[1,1,1,1,1,1,1,1]))