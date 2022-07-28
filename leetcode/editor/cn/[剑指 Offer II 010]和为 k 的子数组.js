//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j >= 0; j--) {
            sum += nums[j]
            if (sum === k) {
                result += 1
            }
        }
    }
    return result
};
subarraySum = function (nums, k) {
    let currentSum = 0, result = 0
    let map = new Map()
    map.set(0, 1)
    for (const num of nums) {
        currentSum += num
        if (map.has(currentSum - k)) {
            result += map.get(currentSum - k)
        }
        if (map.has(currentSum)) map.set(currentSum, map.get(currentSum) + 1)
        else map.set(currentSum, 1)
    }
    console.log(map)
    return result
}
//leetcode submit region end(Prohibit modification and deletion)
subarraySum([1,2,1,2,1], 3)