// 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。
// 一旦你支付此费用，即可选择向上爬一个或者两个台阶。
// 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
// 请你计算并返回达到楼梯顶部的最低花费。

// 示例 1：
// 输入：cost = [10,15,20]
// 输出：15
// 解释：你将从下标为 1 的台阶开始。
// - 支付 15 ，向上爬两个台阶，到达楼梯顶部。
// 总花费为 15 。

// 示例 2：
// 输入：cost = [1,100,1,1,1,100,1,1,100,1]
// 输出：6
// 解释：你将从下标为 0 的台阶开始。
// - 支付 1 ，向上爬两个台阶，到达下标为 2 的台阶。
// - 支付 1 ，向上爬两个台阶，到达下标为 4 的台阶。
// - 支付 1 ，向上爬两个台阶，到达下标为 6 的台阶。
// - 支付 1 ，向上爬一个台阶，到达下标为 7 的台阶。
// - 支付 1 ，向上爬两个台阶，到达下标为 9 的台阶。
// - 支付 1 ，向上爬一个台阶，到达楼梯顶部。
// 总花费为 6 。

// 提示：

// 2 <= cost.length <= 1000
// 0 <= cost[i] <= 999

// dp数组，dp是总的花费，i是目前所达到的台阶
// 当前的台阶是否要爬，是爬了上1层的阶梯，还是上2层的阶梯
// 递推公式
// 初始化
// 遍历顺序
// 举例子

// 理解题意错误，爬1或者2是不用花费体力的555
const myFun = (cost) => {
  const len = cost.length

  // const a = cost[0] + cost[1] + cose[2] 不可能有这种的，因为你爬了1了，那你就可以直接到3了，何必要爬2呢？
  // const a = cost[0] + cost[1] // 也不可能有这种的，因为我可以直接爬到1
  // const b = cost[0] + cost[2] // 爬i
  // const c = cost[1]           // 不爬i

  const dp = [
    cost[0],
    Math.min(cost[0], cost[1]),
    Math.min(cost[0] + cost[2], cost[1]), // i = 2，一般这个好像和递推公式就有点像了
  ]

  // 你自己写的递推公式至少也要能够满足你的初始条件
  // dp应该是一个越来越大的值?
  for (let i = 3; i < len; i++) {
    console.log(i)
    dp[i] =
      Math.min(dp[i - 2] + cost[i], Math.min(dp[i - 1], dp[i - 2])) + cost[i] // 这里可能有问题
    console.log(dp)
  }

  // 跨最后一步的时候
  // console.log(dp[len - 1], dp[len - 2] + cost[len - 2])
  return Math.min(dp[len - 1], dp[len - 2] + cost[len - 2])
}

// const cost = [10, 15, 20]
// const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1] // len = 10
// i = 3, all_cost = 2

// dp都是[0, 0, 0, 1]
// const cost = [0, 0, 0, 1] // 0
// const cost = [0, 0, 1, 1] // 1
const cost = [0, 1, 1, 0] // 1

const res = myFun(cost)
console.log(res)