//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length === 1) return true
    let cover = 0
    for (let i = 0 ; i < nums.length; i++) {
        if (i > cover) return false
        cover = Math.max(cover, nums[i] + i)
        if (cover >= nums.length - 1) return true
    }
};
//leetcode submit region end(Prohibit modification and deletion)
canJump([3,2,1,0,4])