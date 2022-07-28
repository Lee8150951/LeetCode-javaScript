//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    let [left, right] = [0, s.length - 1]
    while (left < s.length/2) {
        if (s[left] !== s[right]) return false
        left++
        right--
    }
    return true
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(isPalindrome("0P"))