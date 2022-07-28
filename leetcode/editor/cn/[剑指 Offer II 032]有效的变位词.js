//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length || s === t) {
        return false
    }
    let map = new Map()
    let result = true
    for (let i = 0; i < s.length; ++i) {
        if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1)
        else map.set(s[i], 1)
    }
    for (let i = 0; i < t.length; ++i) {
        if (map.has(t[i])) map.set(t[i], map.get(t[i]) - 1)
    }
    map.forEach(function (value, key, map) {
        if (value !== 0) {
            result = false
        }
    })
    return result;
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(isAnagram("rat", "car"))