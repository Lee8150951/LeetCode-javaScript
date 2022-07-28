//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let [s1l, s2l, s3l] = [s1.length, s2.length, s3.length]
    if (s1l + s2l !== s3l) return false

    let dp = new Array(s1l + 1).fill(0).map(() => new Array(s2l + 1).fill(false))
    dp[0][0] = true

    for(let i = 1; i <= s1l; i++) {
        if(s1[i - 1] === s3[i - 1]) dp[i][0] = true
        else break
    }
    for(let j = 1; j <= s2l; j++) {
        if(s2[j - 1] === s3[j - 1]) dp[0][j] = true
        else break
    }

    for (let i = 1; i <= s1l; i++) {
        for (let j = 1; j <= s2l; j++) {
            dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) || (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1])
        }
    }
    return dp[s1l][s2l]
};
//leetcode submit region end(Prohibit modification and deletion)
isInterleave(s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac")