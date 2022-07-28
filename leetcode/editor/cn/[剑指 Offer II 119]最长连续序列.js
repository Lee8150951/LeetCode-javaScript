//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0
    const set = new Set(nums)
    nums = [...set]
    nums.sort((a, b) => (a - b))
    nums.push(0)
    let resultList = []
    let result = 1
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] - nums[i] === 1) {
            result += 1
        }
        else {
            resultList.push(result)
            result = 1
        }
    }
    resultList.sort((a, b) => (b - a))
    return resultList[0]
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(longestConsecutive([1,2,0,1]))