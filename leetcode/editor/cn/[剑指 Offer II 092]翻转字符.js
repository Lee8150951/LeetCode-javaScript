//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let dp0 = 0, dp1 = 0;
    for (let i = 0; i < s.length; i++) {
        let dp0New = dp0, dp1New = Math.min(dp0, dp1);
        if (s[i] === '1') {
            dp0New++;
        } else {
            dp1New++;
        }
        dp0 = dp0New;
        dp1 = dp1New;
    }
    return Math.min(dp0, dp1);
};
//leetcode submit region end(Prohibit modification and deletion)
minFlipsMonoIncr("00011000")