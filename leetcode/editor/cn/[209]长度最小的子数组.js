//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let l = 0, r = 0, sum = 0
    let result = nums.length + 1
    while (r < nums.length) {
        sum += nums[r++]
        while (sum >= target) {
            result = Math.min(result, r - l)
            sum -= nums[l++]
        }
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(minSubArrayLen(target = 7, nums = [2,3,1,2,4,3]))