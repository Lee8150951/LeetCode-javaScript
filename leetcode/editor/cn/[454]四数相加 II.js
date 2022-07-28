//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const dict = new Map()
    for (let i of nums1) {
        for (let j of nums2) {
            if (dict.has(i + j)) dict.set(i + j, dict.get(i + j) + 1)
            else dict.set(i + j, 1)
        }
    }
    let result = 0
    for (let i of nums3) {
        for (let j of nums4) {
            if (dict.has(0 - i - j)) result += dict.get(0 - i - j)
        }
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
