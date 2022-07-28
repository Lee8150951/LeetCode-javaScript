//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = []
    let path = []
    let sortNums = nums.sort((a, b) => {
        return a - b
    })
    function backtracking(nums, startIndex) {
        result.push([...path])
        if (startIndex >= nums.length) return
        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) continue
            path.push(nums[i])
            backtracking(nums, i + 1)
            path.pop()
        }
    }
    backtracking(sortNums, 0)
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
