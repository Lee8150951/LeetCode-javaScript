//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const res = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let startNum = 1, flag = 0
    while (startNum <= (n * n)) {
        startNum = right(res, startNum, flag)
        if (startNum >= (n * n)) break
        startNum = down(res, startNum, flag)
        startNum = left(res, startNum, flag)
        startNum = up(res, startNum, flag)
        flag++
    }
    return res
};
function right(matrix, startNum, flag) {
    for (let i = flag; i < matrix.length - flag; i++) {
        matrix[flag][i] = startNum++
    }
    return startNum
}
function down(matrix, startNum, flag) {
    flag += 1
    for (let i = flag; i < matrix.length - flag; i++) {
        matrix[i][matrix.length - flag] = startNum++
    }
    return startNum
}
function left(matrix, startNum, flag) {
    for (let i = matrix.length - flag - 1; i >= flag; i--) {
        matrix[matrix.length - flag - 1][i] = startNum++
    }
    return startNum
}
function up(matrix, startNum, flag) {
    flag += 1
    for (let i = matrix.length - flag - 1; i >= flag; i--) {
        matrix[i][flag - 1] = startNum++
    }
    return startNum
}
//leetcode submit region end(Prohibit modification and deletion)
console.log(generateMatrix(1))