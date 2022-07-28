//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 暴力比对（超时）
var checkInclusion = function(s1, s2) {
    let length = s1.length
    for (let i = 0; i < s2.length - length + 1; i++) {
        if (s1.indexOf(s2[i]) !== -1) {
            let substring = s2.substring(i, i + length)
            if (substring.split("").sort().join() === s1.split("").sort().join()) {
                return true
            }
        }
    }
    return false
};
// 滑动窗口
checkInclusion = function (s1, s2) {
    let targetDict = new Array(26).fill(0)
    for (let a of s1) targetDict[a.charCodeAt(0) - "a".charCodeAt(0)] += 1
    for (let i = 0; i < s2.length - s1.length + 1; i++) {
        if (s1.indexOf(s2[i]) !== -1) {
            let subDict = new Array(26).fill(0)
            let substring = s2.substring(i, i + s1.length)
            for (let a of substring) subDict[a.charCodeAt(0) - "a".charCodeAt(0)] += 1
            if (subDict.toString() === targetDict.toString()) {
                return true
            }
        }
    }
    return false
}
//leetcode submit region end(Prohibit modification and deletion)
console.log(checkInclusion("ab", "eidbaoo"))