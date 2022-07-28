//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]]
    for (const num of nums) {
        let currentLength = res.length
        for (let i = 0; i < currentLength; i++) {
            let current = [...res[i], num]
            res.push(current)
        }
    }
    return res
};
// 回溯
subsets = function (nums) {
    let result = []
    let path = []
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
}
//leetcode submit region end(Prohibit modification and deletion)
subsets([0])