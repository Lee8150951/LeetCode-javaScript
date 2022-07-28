//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    nums.sort((a, b) => a - b)
    let list = [[nums[0], 1]]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            list[list.length - 1][1]++
        } else {
            list.push([nums[i], 1])
        }
    }
    list.sort((a, b) => b[1] - a[1])
    const res = []
    for (let i = 0; i < k; i++) {
        res.push(list[i][0])
    }
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
