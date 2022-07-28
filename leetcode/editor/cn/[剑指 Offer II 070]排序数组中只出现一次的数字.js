//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let sum_target = nums.reduce((sum, current) => (sum + current), 0)
    let nums_set = new Set([...nums])
    let sum_real = [...nums_set].reduce((sum, current) => (sum + current), 0)
    return sum_real * 2 - sum_target
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(singleNonDuplicate([1]))