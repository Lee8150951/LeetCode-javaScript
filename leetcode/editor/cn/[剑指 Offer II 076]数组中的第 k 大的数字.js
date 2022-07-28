//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => (b - a))
    return nums[k - 1]
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(findKthLargest([3,2,1,5,6,4], k = 2))