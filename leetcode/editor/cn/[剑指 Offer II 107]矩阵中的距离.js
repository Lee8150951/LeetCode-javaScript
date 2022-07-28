//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const dp = new Array(mat.length).fill(0).map(() => new Array(mat[0].length).fill(0))
    // 左上第一次遍历
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j]) {
                dp[i][j] = Math.min(
                    (dp[i - 1] ? dp[i - 1][j] : Infinity),
                    (dp[i][j - 1] === undefined ? Infinity : dp[i][j - 1])
                ) + 1
            }
        }
    }
    // 右下第二次遍历
    for (let i = mat.length - 1; i >= 0; i--) {
        for (let j = mat[0].length - 1; j >= 0; j--) {
            if (mat[i][j]) {
                dp[i][j] = Math.min(Math.min(
                    (dp[i + 1] ? dp[i + 1][j] : Infinity),
                    (dp[i][j + 1] ===undefined ? Infinity : dp[i][j + 1])
                ) + 1, dp[i][j])
            }
        }
    }
    return dp
};
//leetcode submit region end(Prohibit modification and deletion)
