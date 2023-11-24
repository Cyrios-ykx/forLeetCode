function getMaxSameChildList() {
  const text1 = 'abcde'
  const text2 = 'ace'

  const dp = new Array(text2.length + 1)
    .fill()
    .map(() => new Array(text1.length + 1).fill())
  // 上下长为text2.length + 1
  // 左右宽为text1.length + 1

  // 初始化
  for (let k = 0; k < text1.length + 1; k++) {
    dp[0][k] = 0
  }
  // 上下长为text2.length + 1
  for (let k = 0; k < text2.length + 1; k++) {
    dp[k][0] = 0
  }
  for (let i = 1; i <= text1.length; i++) {
    //从左到右
    for (let j = 1; j <= text2.length; j++) {
      //从上到下
      //j和text2相关，那就放在dp[k][0]的k的位置
      if (text1[i - 1] === text2[j - 1]) {
        dp[j][i] = dp[j - 1][i - 1] + 1
      } else {
        dp[j][i] = Math.max(dp[j][i - 1], dp[j - 1][i])
      }
    }
  }
  return dp[text2.length][text1.length]
}
const res = getMaxSameChildList()
console.log(res)
