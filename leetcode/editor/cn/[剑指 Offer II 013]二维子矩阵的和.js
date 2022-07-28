//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.sumList = []
    let currentSum = 0
    for (let i = 0; i < matrix.length; i++) {
        let currentSumList = [0]
        currentSum = 0
        for (let j of matrix[i]) {
            currentSum += j
            currentSumList.push(currentSum)
        }
        this.sumList.push(currentSumList)
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0
    for (let row = row1; row <= row2; row++) {
        sum += this.sumList[row][col2 + 1] - this.sumList[row][col1]
    }
    return sum
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
//leetcode submit region end(Prohibit modification and deletion)
