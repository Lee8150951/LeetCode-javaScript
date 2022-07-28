//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
// 超时
var validPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
    let [left, right] = [0, s.length - 1]
    while (left < s.length) {
        if (s[left] !== s[right]) {
            let rightString = s.substring(left + 1, right + 1)
            let leftString = s.substring(left, right)
            if (rightString !== rightString.split("").reverse().join("") && leftString !== leftString.split("").reverse().join("")) {
                return false
            }
        }
        left++
        right--
    }
    return true
};

const isPalindrome = function (s) {
    let [left, right] = [0, s.length - 1]
    while (left < s.length/2) {
        if (s[left] !== s[right]) return false
        left++
        right--
    }
    return true
}
validPalindrome = function (s) {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
    let [left, right] = [0, s.length - 1]
    while (left < s.length) {
        if (s[left] !== s[right]) {
            let rightString = s.substring(left + 1, right + 1)
            let leftString = s.substring(left, right)
            return isPalindrome(rightString) || isPalindrome(leftString);
        }
        left++
        right--
    }
    return true
}
//leetcode submit region end(Prohibit modification and deletion)
console.log(validPalindrome("aba"))