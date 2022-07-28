//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const map = new Map()
    map.set(0, -1)
    let pre = 0, result = 0
    for (let i = 0; i < nums.length; i++) {
        pre += nums[i] === 0 ? -1 : 1
        if (map.has(pre)) {
            result = Math.max(result, i - map.get(pre))
        } else {
            map.set(pre, i)
        }
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
findMaxLength([1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0])