//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.sum = 0; // 求和 并将前缀和存入数组，很明显数据是递增的
    for(let i = 0; i < w.length; i++) {
        const save = w[i];
        w[i] = this.sum;
        this.sum += save;
    }
    w.push(this.sum); // 这里数据多了一个0出来，因为是求区间，因此返回的索引要-1
    this.arr = w;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    console.log(this.arr)
    // 生成一个随机数并判断它在数组中的存在的区间
    let random = Math.random() * this.sum;
    // 二分法查找它所在的区间(换一种说法：找到其插入位置)
    const arr = this.arr;
    const LEN = arr.length;1
    let left = 0,right=LEN-1,mid;
    while(left<right) {
        mid = Math.floor((left+right)/2);
        if(arr[mid]>=random) right = mid;
        else left = mid+1;
    }
    return left -1; // 最后 left与right 相等，结果记得-1
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
//leetcode submit region end(Prohibit modification and deletion)
