//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    nums.unshift(0)
    nums.push(0)
    let sum = 0, presum = 0, result = -1
    for (let num of nums) sum += num
    for (let i = 1; i < nums.length - 1; i++) {
        presum += nums[i - 1]
        if (presum === sum - nums[i] - presum) {
            result = i - 1
            return result
        }
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
pivotIndex([-1,-1,0,0,-1,-1])