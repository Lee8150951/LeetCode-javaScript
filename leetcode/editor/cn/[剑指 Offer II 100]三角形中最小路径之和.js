//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const height = triangle.length
    const dp = new Array(height).fill(0).map((v, i) => new Array(triangle[i].length));
    // 初始化
    dp[height - 1] = triangle[height - 1]
    for (let i = height - 2; i >= 0; i--) {
        for (let j = 0; j < dp[i].length; j++) {
            dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1])
        }
    }
    return dp[0][0]
};
//leetcode submit region end(Prohibit modification and deletion)
minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])