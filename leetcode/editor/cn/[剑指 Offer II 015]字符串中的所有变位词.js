//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let pList = new Array(26).fill(0)
    let result = []
    for (const a of p) pList[a.charCodeAt(0) - "a".charCodeAt(0)] += 1
    for (let i = 0; i < s.length - p.length + 1; i++) {
        if (p.indexOf(s[i]) !== -1) {
            let currentList = s.substring(i, i + p.length)
            let sList = new Array(26).fill(0)
            for (const a of currentList) sList[a.charCodeAt(0) - "a".charCodeAt(0)] += 1
            if (pList.toString() === sList.toString()) result.push(i)
        }
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(findAnagrams("abab", "ab"))