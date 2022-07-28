//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const length = obstacleGrid[0].length
    const width = obstacleGrid.length
    const dp = new Array(width).fill(1).map(() => new Array(length).fill(0))
    for (let i = 0; i < length && obstacleGrid[0][i] === 0; i++) {
        dp[0][i] = 1
    }
    for (let i = 0; i < width && obstacleGrid[i][0] === 0; i++) {
        dp[i][0] = 1
    }
    for (let i = 1; i < width; i++) {
        for (let j = 1; j < length; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0
            }
        }
    }
    return dp[width - 1][length - 1]
};
//leetcode submit region end(Prohibit modification and deletion)
uniquePathsWithObstacles([[0,0,0,0],[0,1,0,0],[0,0,0,0]])