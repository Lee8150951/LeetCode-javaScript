//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} words
 * @return {number}
 */
// 暴力解法
var maxProduct = function(words) {
    let result = 0;
    let map_a = new Set()
    for (let i = 0; i < words.length - 1; i++) {
        for (const word of words[i]) {
            map_a.add(word)
        }
        for (let j = i + 1; j < words.length; j++) {
            let flag = 0
            for (const word of words[j]) {
                if (map_a.has(word)) {
                    flag = 1
                    break
                }
            }
            if (flag !== 1) {
                result = Math.max(result, words[i].length * words[j].length)
            }
        }
        map_a.clear()
    }
    console.log(result)
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
maxProduct(["edadc","ebbfe","aacdde","dfe","cb","fddddff","fabca","adccac","ece","ccaf","feba","bcb","edadc","aea","bacb","acefa","fcebffd","dfeebca","bedcbaa","deaccc","abedc","dadff","eef","ddebbb","abecab","cd","abdeee","eedce","deef","dceaddd","ced","fbbf","ba","eefeda","fb","cddc","adafbf","dded","aadbf","caefbaf","ccebf","dbb","ee","dadcecc","ddbcabb","afeaa","ec","aad","efde","cbcda","cdbdafd","cddc","ecaaa","ae","cfc","bccac","cdcc","abbbf","fcdface","ddbcdc","bfebb","daed","bc","dc","ecdfc","eeb","bb","dad","caecb","fbe","bbbc","cacea","dbc","fbe","bcfffbd","aeda","cff","ddfc","ea","bdfd","ccb","cb","ae","ceabefa","dcea","cbaed","bfedf","fa","ccd","fece","bceef","acabca","dafa","fdeec","dac","cae","adeeadb","ecacc","acfe","de"])