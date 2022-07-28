//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 双指针
var isSubsequence = function(s, t) {
    let index = 0
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[index]) {
            index++
        }
    }
    return index === s.length
};
// 动态规划
isSubsequence = function (s, t) {
    const [m, n] = [s.length, t.length];
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }
    return dp[m][n] === m
}
//leetcode submit region end(Prohibit modification and deletion)
