//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) return 1
    let result = 0
    let set = new Set()
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (!set.has(s[j])) {
                set.add(s[j])
            } else {
                result = Math.max(result, set.size)
                set.clear()
                break
            }
        }
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(lengthOfLongestSubstring(" "))