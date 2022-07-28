//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const [result, path] = [[], []]
    nums.sort((a, b) => (a - b))
    function backtracking(nums, judge) {
        if (path.length === nums.length) {
            result.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !judge[i - 1]) {
                continue
            }
            if (judge[i]) continue
            judge[i] = true
            path.push(nums[i])
            backtracking(nums, judge)
            path.pop()
            judge[i] = false
        }
    }
    backtracking(nums, [])
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
