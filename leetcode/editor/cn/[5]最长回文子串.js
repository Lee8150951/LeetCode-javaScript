//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = ''
    for(let i=0; i< s.length; i++) {
        // 分奇偶， 一次遍历，每个字符位置都可能存在奇数或偶数回文
        helper(i, i)
        helper(i, i+1)
    }
    function helper(l, r) {
        while(l>=0 && r< s.length && s[l] === s[r]) {
            l--
            r++
        }
        const maxStr = s.slice(l + 1, r + 1 - 1)
        if (maxStr.length > max.length) max = maxStr
    }
    return max
};
//leetcode submit region end(Prohibit modification and deletion)
console.log()