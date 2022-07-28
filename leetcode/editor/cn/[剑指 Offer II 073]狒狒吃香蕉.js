//leetcode submit region begin(Prohibit modification and deletion)
var getTime = function (piles, speed) {
    let time = 0
    for (const pile of piles) {
        time += Math.floor((pile + speed - 1) / speed)
    }
    return time
}
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    piles.sort((a, b) => (a - b))
    let [min, max, k = max] = [1, piles[piles.length - 1]]
    while (min < max) {
        const speed = Math.floor((max - min) / 2) + min
        const time = getTime(piles, speed)
        if (time <= h) {
            k = speed
            max = speed
        } else {
            min = speed + 1
        }
    }
    return k
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(minEatingSpeed(piles = [3,6,7,11], h = 8))