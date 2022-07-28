//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const length = nums.length
    let [left, right] = [0, length - 1]
    let mid
    if (target < nums[0]) return 0
    if (target > nums[length - 1]) return length

    while (left < right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) return mid
        if (nums[mid] > target) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};
//leetcode submit region end(Prohibit modification and deletion)
