//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let numsSet1 = new Set(nums1), numsSet2 = new Set(nums2)
    let result = []
    for (const i of numsSet1) {
        if (numsSet2.has(i)) result.push(i)
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
