//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const length = grid.length
    const width = grid[0].length
    const dp = new Array(length).fill(0).map(() => new Array(width).fill(0))
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < width; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = grid[i][j]
            } else if (i === 0) {
                dp[0][j] = dp[0][j - 1] + grid[0][j]
            } else if (j === 0){
                dp[i][0] = dp[i - 1][0] + grid[i][0]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
            }
        }
    }
    console.log(dp)
    return dp[length - 1][width - 1]
};
//leetcode submit region end(Prohibit modification and deletion)
