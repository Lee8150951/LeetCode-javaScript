//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let point = 0
    while (true) {
        if (point === nums.length) break
        if (nums[point] === val) {
            nums.splice(point, 1)
        } else {
            point++
        }
    }
    return nums.length
};
//leetcode submit region end(Prohibit modification and deletion)
