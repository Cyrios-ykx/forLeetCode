const robotFun = (m, n) => {
  // 1 <= m, n <= 100
  // m是行，n是列

  // m = 3, n = 4
  // const dp = [
  //   [1, 1, 1, 1],
  //   [1, 2, 3, 4],
  //   [1, 3, 6, 10],
  // ]

  // 初始化数组
  // const dp = new Array(m).fill(new Array(n)) //这里的new Array(n)会因为引用问题导致后续无法正常进行，是因为fill的问题吧？
  // const dp = new Array(m).fill(JSON.parse(JSON.stringify(new Array(n))))
  // new Array(3).fill(new Array(3).fill(0));这样写还不行
  const dp = new Array(m).fill().map(() => new Array(n).fill(0))
  // dp[0][0] = 1
  console.log(dp)

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1
  }

  // 递推公式
  // dp[m][n] = dp[m - 1][n] + dp[m][n - 1]
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  // console.log(dp)

  return dp[m - 1][n - 1]
}

// const [m, n] = [3, 7]
const [m, n] = [7, 3]
const res = robotFun(m, n)
console.log(res)
