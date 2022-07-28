//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split("").reverse().join("")
    b = b.split("").reverse().join("")
    let length = Math.max(a.length, b.length)
    a = a.padEnd(length, '0')
    b = b.padEnd(length, '0')
    let result = []
    let carry = 0
    for (let i = 0; i < length; i++) {
        if (Number(a[i]) + Number(b[i]) + carry === 2) {
            carry = 1
            result.push(0)
        } else if (Number(a[i]) + Number(b[i]) + carry === 3) {
            carry = 1
            result.push(1)
        } else if (Number(a[i]) + Number(b[i]) + carry === 0) {
            carry = 0
            result.push(0)
        } else {
            carry = 0
            result.push(1)
        }
    }
    if (carry !== 0) result.push(1)
    return result.reverse().join("")
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(addBinary(a = "1010", b = "1011"))