//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n === 1) return true
    const dict = new Set()
    dict.add(n)
    while (true) {
        n = getHappy(n)
        if (dict.has(n)) return false
        dict.add(n)
        if (n === 1) return true
    }
};

let getHappy = function(n) {
    const str = n.toString()
    let happy = 0
    for (const i of str) {
        happy += parseInt(i) * parseInt(i)
    }
    return happy
}
//leetcode submit region end(Prohibit modification and deletion)
