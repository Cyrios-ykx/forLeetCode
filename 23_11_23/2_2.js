function buyGuPiao_2() {
  //含手续费
  const prices = [1, 3, 2, 8, 4, 9]
  const fee = 2
  //
  const dp = new Array(prices.length).fill().map(() => new Array(2).fill())
  //
  dp[0][0] = -prices[0]
  dp[0][1] = 0
  //
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]) // Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
    // dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])
  }
  console.log(dp)

  return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][1])
}
const res = buyGuPiao_2()
console.log(res)

// dp数组，下标的含义，i为第i天，dp[i]为第i天所获得的现金
// dp[i][0]持有股票获得的现金
// dp[i][1]不持有股票获得的现金

// 递推公式
// 第i-1天就持有股票的话，dp[i][0] = dp[i-1][0]
// 第i天买入了股票的话，dp[i][0] = -prices[i]  // 应该是前一天没有持有股票的现金，减去i天买了股票的钱
// dp[i][0] = max(dp[i-1][0], -prices[i])

// 第i-1天就没有持有股票的话，dp[i][1] = dp[i-1][1]
// 第i天卖出了股票的话，dp[i][1] = prices + dp[i-1][0](这个是可能正可能负数的)(这里就带有手续费了)
// dp[i][1] = max(dp[i-1][1], prices + dp[i-1][0])

// ⭐️ 最后我们是一定要卖出股票的？看情况吧，如果卖了还亏的话，那确实没必要卖喔？

// 初始化
// dp[0][0] = -prices[0]
// dp[0][1] = 0

// 遍历顺序
// 按天来的，那就是从上到下，从左到右

// 举例验证
