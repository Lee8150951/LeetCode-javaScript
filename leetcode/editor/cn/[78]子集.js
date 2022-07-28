//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let path = []
    let result = []
    function backtracking(nums, startIndex) {
        result.push([...path])
        if (startIndex >= nums.length) return
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i])
            backtracking(nums, i + 1)
            path.pop()
        }
    }
    backtracking(nums, 0)
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
