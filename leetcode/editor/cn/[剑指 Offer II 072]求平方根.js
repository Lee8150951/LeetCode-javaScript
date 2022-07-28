//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let [left, right] = [0, x]
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (mid * mid === x) {
            return mid
        } else if (mid * mid > x) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return right
};
//leetcode submit region end(Prohibit modification and deletion)
