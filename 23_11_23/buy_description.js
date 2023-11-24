const maxProfit = (prices) => {
  const len = prices.length
  // 创建dp数组
  const dp = new Array(len).fill([0, 0])
  // dp数组初始化
  dp[0] = [-prices[0], 0]
  for (let i = 1; i < len; i++) {
    // 更新dp[i]
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]),
      Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
    ]
  }
  console.log(dp)
  return dp[len - 1][1]
}

const prices = [1, 3, 2, 8, 4, 9]
const res = maxProfit(prices)
console.log(res)

// 没有手续费第i天买入了股票的话，dp[i][0]持有股票获得的现金,可以直接-prices[i]
// 有手续费为什么要dp[i - 1][1] - prices[i]？

// 因为没有关联吧
// 有手续费的话，持有股票获得的现金，就和不持有股票获得的现金有关了
// 每次都要根据上次结算完手续费以后的，不持有股票获得的现金有关
// 所以应该是- prices[i] + dp[i - 1][1]
