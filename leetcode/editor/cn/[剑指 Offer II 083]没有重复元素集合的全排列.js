//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const [result, path] = [[], []]
    function backtracking(nums, used) {
        if (path.length === nums.length) {
            result.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used.has(nums[i])) continue
            used.add(nums[i])
            path.push(nums[i])
            backtracking(nums, used)
            path.pop()
            used.delete(nums[i])
        }
    }
    backtracking(nums, new Set())
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
