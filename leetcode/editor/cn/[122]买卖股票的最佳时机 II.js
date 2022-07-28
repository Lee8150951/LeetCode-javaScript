//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [result, mem] = [0, 0]
    let minPrice = prices[0]
    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i])
        let current = prices[i] - minPrice
        if (current < mem) {
            result += mem
            mem = 0
            minPrice = prices[i]
        } else {
            mem = current
        }
        if (i === prices.length - 1 && mem !== 0) {
            result += mem
        }
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
maxProfit([7,1,5,3,6,4])