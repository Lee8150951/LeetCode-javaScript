//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    const st = new Map()
    for (let i = 0; i < words.length; i++) {
        let w = words[i]
        if (st.has(w)) continue
        st.set(w, 1)
        for (let j = 1; j < w.length; j++) st.set(w.substr(j), 0)
    }
    let ans = 0
    for (let [k, v] of st) {
        if (v === 1) {
            ans += k.length + 1
        }
    }
    return ans
};
//leetcode submit region end(Prohibit modification and deletion)
