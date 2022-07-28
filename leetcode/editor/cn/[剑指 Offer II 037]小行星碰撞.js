//leetcode submit region begin(Prohibit modification and deletion)
let crashFunc = function (asteroids) {
    let flag = 0
    if (asteroids.length === 0) return [flag, []]
    let res = [asteroids.pop()]
    while (asteroids.length > 0) {
        let asteroids_tail = asteroids.pop()
        if (asteroids_tail > 0 && res[0] < 0) {
            if (asteroids_tail === -res[0]) {
                res.shift()
            } else if (asteroids_tail > -res[0]) {
                flag = 1
                res.shift()
                res.unshift(asteroids_tail)
            }
        } else {
            res.unshift(asteroids_tail)
        }
    }
    return [flag, res]
}
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let result = crashFunc(asteroids)
    while (true) {
        result = crashFunc(result[1])
        if (result[0] === 0) {
            return result[1]
        }
    }
};
// 优解
asteroidCollision = function(asteroids) {
    let stack = [];
    for (let a of asteroids) {
        while (stack.length && stack[stack.length-1] > 0 && stack[stack.length-1] < -a) {
            stack.pop();
        }
        if (stack.length && a < 0 && stack[stack.length-1] === -a) {
            stack.pop();
        } else if (a > 0 || !stack.length || stack[stack.length-1] < 0) {
            stack.push(a);
        }
    }
    return stack;
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(asteroidCollision([-2, -1, 1, 2]))