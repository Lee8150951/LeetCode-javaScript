//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let copy = Array.from(arr)
    copy.sort((a, b) => (b - a))
    return arr.indexOf(copy[0])
};
peakIndexInMountainArray = function (arr) {
    if (arr[arr.length - 1] > arr[arr.length - 2]) return arr.length - 1
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] < arr[i]) {
            return i
        }
    }
}
//leetcode submit region end(Prohibit modification and deletion)
console.log(peakIndexInMountainArray([0,0,10]))