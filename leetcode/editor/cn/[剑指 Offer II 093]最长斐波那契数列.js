//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    const map = new Map()
    const dp = new Array(arr.length).fill(0).map(() => new Array(arr.length).fill(0))
    for(let i = 0; i < arr.length; i++) {
        map.set(arr[i], i)
    }
    let ans = 0
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            const k = map.get(arr[i] - arr[j])
            dp[i][j] = k >= 0 && k < j ? dp[j][k] + 1 : 2
            ans = Math.max(dp[i][j],ans)
        }
    }
    console.log(dp)
    return ans > 2 ? ans : 0
};
//leetcode submit region end(Prohibit modification and deletion)
lenLongestFibSubseq([1,3,7,11,12,14,18])