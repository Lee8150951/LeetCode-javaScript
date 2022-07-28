//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let map = new Map()
    for (let i in order) {
        map.set(order[i], Number(i))
    }
    for (let j = 0; j < words.length - 1; j++) {
        let length = Math.min(words[j].length, words[j + 1].length)
        if (words[j] === words[j + 1]) break
        if (words[j].indexOf(words[j + 1]) !== -1) return false
        for (let i = 0; i < length; i++) {
            if (map.get(words[j][i]) < map.get(words[j+1][i])) break
            if (map.get(words[j][i]) > map.get(words[j+1][i])) return false
        }
    }
    return true
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(isAlienSorted(["hello","hello"], "abcdefghijklmnopqrstuvwxyz"))