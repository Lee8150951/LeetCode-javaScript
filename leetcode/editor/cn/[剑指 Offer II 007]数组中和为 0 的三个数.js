//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => (a - b))
    let result = new Set(), res = []
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1, right = nums.length - 1
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] > 0) {
                right--
            }
            else if (nums[i] + nums[left] + nums[right] < 0) {
                left++
            }
            else {
                result.add([nums[i], nums[left], nums[right]].join("|"))
                right--
                left++
            }
        }
        if (nums[i] > 0) break
    }
    result.forEach(function (value) {
        let current = []
        for (let i of value.split("|")) {
            current.push(Number(i))
        }
        res.push(current)
    })
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(threeSum([0,0,0,0,0]))