//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0]
    // let dp = []
    let result = 0
    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i])
        // dp.push(prices[i] - minPrice)
        result = Math.max(result, prices[i] - minPrice)
    }
    // return Math.max(...dp)
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
maxProfit([7,1,5,3,6,4])