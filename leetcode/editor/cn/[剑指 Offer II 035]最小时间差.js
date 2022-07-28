//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let timeList = []
    for (let i = 0; i < timePoints.length; i++) {
        let timeArray = timePoints[i].split(":")
        if (i === 0) {
            timeList.push(24 * 60 + Number(timeArray[0] * 60) + Number(timeArray[1]))
        }
        timeList.push(Number(timeArray[0] * 60) + Number(timeArray[1]))
    }
    timeList.sort((a, b) => (a - b))
    let result = Number(timeList[timeList.length - 1])
    for (let i = 0; i< timeList.length - 1; i++) {
        result = Math.min(result, timeList[i + 1] -timeList[i])
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(findMinDifference(["05:31","22:08","00:35"]))