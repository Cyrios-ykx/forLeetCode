// '123'[1] === '2'
// '123'.length === 3

// dp[i][j]
// i的含义是text1的第i个字符
// j的含义是text2的第j个字符
// dp[i][j]代表的是，在i和j位置时，有的最大公共子序列的长度

// dp[i][j]什么时候加1？
// 当text1[i] === text2[j]的时候

function getMaxSameChildList() {
  // 默认text2比text1长?
  // const text1 = 'ace'
  // const text2 = 'abcde'

  // 无关顺序的
  const text1 = 'abcde'
  const text2 = 'ace'

  const dp = new Array(text2.length + 1)
    .fill()
    .map(() => new Array(text1.length + 1).fill())

  // 初始化
  for (let k = 0; k < text1.length + 1; k++) {
    dp[0][k] = 0
  }
  for (let k = 0; k < text2.length + 1; k++) {
    dp[k][0] = 0
  }
  // console.log(dp)
  // [
  //   [ 0, 0, 0, 0 ],
  //   [ 0, undefined, undefined, undefined ],
  //   [ 0, undefined, undefined, undefined ],
  //   [ 0, undefined, undefined, undefined ],
  //   [ 0, undefined, undefined, undefined ],
  //   [ 0, undefined, undefined, undefined ]
  // ]

  // 遍历
  // 是dp[i][j]还是dp[j][i]跟你初始化的时候有关
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        // console.log(text1[i - 1], text2[j - 1], i, j)
        dp[j][i] = dp[j - 1][i - 1] + 1
      } else {
        dp[j][i] = Math.max(dp[j][i - 1], dp[j - 1][i])
      }
    }
  }
  console.log(dp)
  // [
  //   [ 0, 0, 0, 0 ], //0
  //   [ 0, 1, 1, 1 ], //1
  //   [ 0, 1, 1, 1 ], //2
  //   [ 0, 1, 2, 2 ], //3
  //   [ 0, 1, 2, 2 ], //4
  //   [ 0, 1, 2, 3 ]  //5
  // ]
  console.log(dp[text2.length]) //[ 0, 1, 2, 3 ]

  return dp[text2.length][text1.length]
}
const res = getMaxSameChildList()
console.log(res)
