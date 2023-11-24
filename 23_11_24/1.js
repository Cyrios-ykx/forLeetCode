// 示例 1：
// 输入：asteroids = [5,10,-5]
// 输出：[5,10]
// 解释：10 和 -5 碰撞后只剩下 10 。 5 和 10 永远不会发生碰撞。

// 示例 2：
// 输入：asteroids = [8,-8]
// 输出：[]
// 解释：8 和 -8 碰撞后，两者都发生爆炸。

// 示例 3：
// 输入：asteroids = [10,2,-5]
// 输出：[10]
// 解释：2 和 -5 发生碰撞后剩下 -5 。10 和 -5 发生碰撞后剩下 10 。

function getAsteroids(asteroids) {
  //
  // const stack = [asteroids[0]]
  // for (let i = 1; i < asteroids.length; i++) {
  //   if (asteroids[i] < 0) {
  //     const res = stack.pop()
  //     if (res <= Math.abs(asteroids[i])) {
  //       stack.push(asteroids[i])
  //     } else {
  //       stack.push(res)
  //     }
  //   } else {
  //     stack.push(asteroids[i])
  //   }
  // }
  const stack = [asteroids[0]]
  for (let i = 1; i < asteroids.length; i++) {
    if (stack.length === 0) {
      stack.push(asteroids[0])
      continue
    }
    const res = stack.pop()
    // 发生碰撞
    if (res * asteroids[i] < 0) {
      if (Math.abs(res) > Math.abs(asteroids[i])) {
        stack.push(res)
      } else if (Math.abs(res) < Math.abs(asteroids[i])) {
        stack.push(asteroids[i])
      }
    } else {
      stack.push(res)
      stack.push(asteroids[i])
    }
    console.log(stack)
  }
  return stack
}
// const asteroids = [10, 2, -5]
// const res = getAsteroids(asteroids)
// console.log(res)
//  难点: 如何判断什么时候碰撞？GPT：乘法

const asteroidCollision = function (asteroids) {
  const stack = []
  for (const aster of asteroids) {
    let alive = true // 定义状态
    while (
      alive &&
      aster < 0 &&
      stack.length > 0 &&
      stack[stack.length - 1] > 0
    ) {
      alive = stack[stack.length - 1] < -aster // aster 是否存在
      // 根本不用多余的判断是否等于，因为没有0
      if (stack[stack.length - 1] <= -aster) {
        // 栈顶行星爆炸
        stack.pop()
      }
    }
    if (alive) {
      stack.push(aster)
    }
  }
  return stack
  console.log(stack)
  // const size = stack.length
  // const ans = new Array(size).fill(0)
  // for (let i = size - 1; i >= 0; i--) {
  //   ans[i] = stack.pop()
  // }
  // return ans
}

// const asteroids = [-5, 10] //擦肩而过了555
const asteroids = [5, 10, -11, -12]
const res_lc = asteroidCollision(asteroids)
console.log(res_lc)
