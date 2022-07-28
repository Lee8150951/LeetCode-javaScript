//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let curIndex = 0
    let nextIndex = 0
    let steps = 0
    for(let i = 0; i < nums.length - 1; i++) {
        nextIndex = Math.max(nums[i] + i, nextIndex)
        if(i === curIndex) {
            curIndex = nextIndex
            steps++
        }
    }
    return steps
}
//leetcode submit region end(Prohibit modification and deletion)
jump([1,2,3,4,5,6,7,8])