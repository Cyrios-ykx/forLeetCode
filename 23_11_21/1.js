// const nums = [2, 7, 9, 3, 1, 10]
// 20 7 3 10
// 21 2 9 10

// 0 <= nums[i] <= 400
const nums = [2]

const myFun = (nums) => {
  const len = nums.length

  // dp数组初始化
  const dp = [nums[0], Math.max(nums[0], nums[1])]

  // 遍历顺序
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  return dp[len - 1]
}

// 确定dp数组及下标的含义
// 确定递推方程
// -初始化dp数组
// 确定遍历顺序
// 举例验证

const res = myFun(nums)
// console.log(res)
console.log(Math.max(1, undefined || 0))

// 跨文件也会访问到，艹！
console.log(cost)
