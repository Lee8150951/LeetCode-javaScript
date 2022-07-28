//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = [], map = new Map(), position = 0
    strs.forEach(function (value, index) {
        let sort = value.split("").sort().join("|")
        if (map.get(sort) !== undefined) {
            result[map.get(sort)].push(value)
        } else {
            result.push([value])
            map.set(sort, position)
            position++
        }
    })
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(groupAnagrams(["a"]))