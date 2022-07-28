//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (!nums.length) return []

    let ans = [], windows = []

    for (let i = 0; i < nums.length; i++) {
        if (i >= k && windows[0] <= i - k) windows.shift()
        while(windows.length && nums[windows[windows.length-1]] <= nums[i]) windows.pop()
        windows.push(i)
        if (i >= k - 1) ans.push(nums[windows[0]])
    }

    return ans
};
//leetcode submit region end(Prohibit modification and deletion)
