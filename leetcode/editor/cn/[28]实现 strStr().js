//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let flag = false
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                flag = false
                break
            }
            flag = true
        }
        if (flag) return i
    }
    return -1
};
//leetcode submit region end(Prohibit modification and deletion)