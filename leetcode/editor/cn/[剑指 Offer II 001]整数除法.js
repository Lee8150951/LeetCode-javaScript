//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var divide = function(a, b) {
    if (a === 0) return 0;
    if (a === -Math.pow(2, 31) && b === -1) {
        return Math.pow(2, 31) - 1;//如果溢出
    }
    let fu = a * b <= 0;//判断结果正负号
    a = Math.abs(a);//取绝对值计算
    b = Math.abs(b);//取绝对值计算
    let len = 0;
    let sum = a;
    while (sum >= b) {
        sum -= b;//依次递减
        len++;//累加结果
    }
    return fu ? -len : len;
};
//leetcode submit region end(Prohibit modification and deletion)
