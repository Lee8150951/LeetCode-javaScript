//leetcode submit region begin(Prohibit modification and deletion)
let getDict = function (dicSet, sense) {
    for (let i = 0; i < sense.length; i++) {
        if (dicSet.has(sense.slice(0, i))) {
            return sense.slice(0, i)
        }
    }
    return sense
}
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    let sentenceArray = sentence.split(" ")
    let dicSet = new Set([...dictionary])
    let result = []
    for (let sense of sentenceArray) {
        result.push(getDict(dicSet, sense))
    }
    return result.join(" ")
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(replaceWords(dictionary = ["a", "aa", "aaa", "aaaa"], sentence = "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa"))