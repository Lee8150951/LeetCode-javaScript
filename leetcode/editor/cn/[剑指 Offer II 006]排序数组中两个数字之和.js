//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/*超时*/
var twoSum = function(numbers, target) {
    for (let i in numbers) {
        if (numbers.indexOf(Number(target - numbers[i])) !== -1) {
            return [Number(i), numbers.lastIndexOf(target - numbers[i])]
        }
    }
};
twoSum = function (numbers, target) {
    let left = 0, right = numbers.length - 1
    while (left < right) {
        if (numbers[left] + numbers[right] > target) {
            right -= 1
        } else if (numbers[left] + numbers[right] < target) {
            left += 1
        } else {
            break
        }
    }
    return [left, right]
}
//leetcode submit region end(Prohibit modification and deletion)
console.log(twoSum([0,0,3,4], 0))