//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return intervals
    intervals.sort((a, b) => (a[0] - b[0]))
    let result = []
    let i = 0
    while (i < intervals.length) {
        let current = [intervals[i][0], intervals[i][1]]
        let j = i + 1
        while (j < intervals.length && intervals[j][0] <= current[1]) {
            current[1] = Math.max(current[1], intervals[j][1])
            j++
        }
        result.push(current)
        i = j
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))