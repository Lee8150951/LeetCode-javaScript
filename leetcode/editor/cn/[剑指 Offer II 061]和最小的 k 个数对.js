//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
// 暴力解法
var kSmallestPairs = function(nums1, nums2, k) {
    const list = []
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            list.push([nums1[i], nums2[j]])
        }
    }
    list.sort((a, b) => {
        return (a[0] + a[1]) - (b[0] + b[1])
    })
    return list.slice(0, k)
};

// 堆排序
kSmallestPairs = function (nums1, nums2, k) {

}
//leetcode submit region end(Prohibit modification and deletion)
console.log(kSmallestPairs([1,7,11], [2,4,6], 3))
