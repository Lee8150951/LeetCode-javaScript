//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let dict = new Map()
    for (const num in arr2) {
        dict.set(arr2[num], Number(num))
    }
    let arr_temp01 = [], arr_temp02 = []
    for (const num of arr1) {
        if (dict.get(num) === undefined) {
            arr_temp02.push(num)
        } else {
            arr_temp01.push(num)
        }
    }
    arr_temp02.sort((a, b) => (a - b))
    for (let i = 0; i < arr_temp01.length - 1; i++) {
        for (let j = 0; j < arr_temp01.length - i - 1; j++) {
            let num_front = dict.get(arr_temp01[j]), num_back = dict.get(arr_temp01[j + 1])
            if (num_front > num_back) {
                let temp = arr_temp01[j]
                arr_temp01[j] = arr_temp01[j + 1]
                arr_temp01[j + 1] = temp
            }
        }
    }
    return [...arr_temp01, ...arr_temp02]
};
//leetcode submit region end(Prohibit modification and deletion)
relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6])