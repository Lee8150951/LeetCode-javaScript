//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let sum_current = eval(nums.join("+"))
    let set = new Set(nums)
    nums = [...set]
    let sum_target = eval(nums.join("+"))
    return ((sum_target * 3) - sum_current) / 2
};
//leetcode submit region end(Prohibit modification and deletion)
singleNumber([2,2,3,2])