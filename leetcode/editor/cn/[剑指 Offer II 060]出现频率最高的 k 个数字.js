//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    for (let i of nums) {
        if (!map.has(i)) map.set(i, 1)
        else map.set(i, map.get(i) + 1)
    }
    let arr = []
    for (let kv of map) arr.push(kv)
    arr.sort((a, b) => (b[1] - a[1]))
    arr = arr.slice(0, k)
    return arr.map(a => a[0])
};
//leetcode submit region end(Prohibit modification and deletion)
topKFrequent([1,1,1,2,2,3],2)