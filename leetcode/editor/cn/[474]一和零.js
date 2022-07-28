//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    for (let str of strs) {
        let [zeroNum, oneNum] = [0, 0]
        // 获取每个字符串的0，1的数量
        for (let i of str) {
            if (i === "0") zeroNum += 1
            else oneNum += 1
        }

        for (let i = m; i >= zeroNum; i--) {
            for (let j = n; j >= oneNum; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1);
            }
        }
    }
    return dp[m][n]
};
//leetcode submit region end(Prohibit modification and deletion)
findMaxForm(strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3)