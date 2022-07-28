//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    let dp = costs[0]
    for (let i = 1; i < costs.length; i++) {
        dp = getMin(dp, costs[i])
    }
    return Math.min(...dp)
};
let getMin = function (nums_01, nums_02) {
    let nums = []
    for (let i = 0; i < nums_02.length; i++) {
        let result = Number.MAX_VALUE
        for (let j = 0; j < nums_01.length; j++) {
            if (i !== j) result = Math.min(result, nums_02[i] + nums_01[j])
        }
        nums[i] = result
    }
    return nums
}
//leetcode submit region end(Prohibit modification and deletion)
getMin([18,33,7],[14,3,19])