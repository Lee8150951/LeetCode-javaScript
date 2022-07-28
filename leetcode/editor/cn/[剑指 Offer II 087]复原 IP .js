//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const res = [], path = []
    function backtracking(startIndex) {
        const len = path.length
        if(len > 4) return
        if(len === 4 && startIndex === s.length) {
            res.push(path.join("."))
            return
        }
        for(let i = startIndex; i < s.length; i++) {
            const str = s.substring(startIndex, i + 1)
            if(str.length > 3 || Number(str) > 255) break
            if(str.length > 1 && str[0] === "0") break
            path.push(str);
            backtracking(i + 1)
            path.pop()
        }
    }
    backtracking(0)
    return res
};
//leetcode submit region end(Prohibit modification and deletion)