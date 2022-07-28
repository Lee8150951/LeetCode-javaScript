//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0, right = nums.length - 1, point = nums.length - 1
    let result = new Array(nums.length).fill(0)
    while (left <= right) {
        let leftNum = nums[left] * nums[left]
        let rightNum = nums[right] * nums[right]
        if (leftNum < rightNum) {
            result[point] = rightNum
            right--
            point--
        } else {
            result[point] = leftNum
            left++
            point--
        }
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
sortedSquares([-4,-1,0,3,10])