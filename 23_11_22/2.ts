namespace myNameSpace {
  export const myFun = () => {
    const cost = [1, 2, 3]
    const dp = [0, 0]

    // i代表从第几个台阶开始爬，爬到第几个台阶
    for (let i = 2; i <= cost.length; i++) {
      // console.log(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
      //为什么是<=，因为最后一步要跨过最后一个台阶的原因
      dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    }

    // console.log(dp)
    return dp[cost.length]
    // 而为什么是cost.length。而不是cost.length - 1。
    // 不是因为最后一步的原因，而是因为你要跨上最后一个台阶，而不是偷最后一间屋子
  }
}
const result = myNameSpace.myFun()
console.log(result)

// const cost = 1 //无法重新声明块范围变量“cost”
// console.log(cost)
