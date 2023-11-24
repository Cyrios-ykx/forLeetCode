// 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，
// 其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。
// 如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 示例 1:

// 输入: temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]
// 示例 2:

// 输入: temperatures = [30,40,50,60]
// 输出: [1,1,1,0]
// 示例 3:

// 输入: temperatures = [30,60,90]
// 输出: [1,1,0]

// 提示：

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100
// const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]

function dayTemperature(temperatures) {
  //
}

const res = dayTemperature(temperatures)
console.log(res)

// 不可能用动态规划，因为动态规划一般下一个状态是和上一个状态有关的
// 无脑暴力双重for循环

// 输入
// temperatures =
// [55,38,53,81,61,93,97,32,43,78]

// 添加到测试用例
// 输出
// [3,1,1,2,1,1,1,1,0,0]
// 预期结果
// [3,1,1,2,1,1,0,1,1,0]

// [3, 2, 1]
// function dayTemperature_1(temperatures) {
//   //
//   const answer = []

//   for (let i = 0; i < temperatures.length; i++) {
//     for (let j = i; j < temperatures.length; j++) {
//       if (temperatures[j] > temperatures[i]) {
//         answer.push(j - i)
//         break
//       }
//       if (j === temperatures.length - 1) {
//         answer.push(0)
//       }
//     }
//   }
//   answer.push(0)
//   return answer
// }

// const temperatures = [55, 38, 53, 81, 61, 93, 97, 32, 43, 78]
// const res_1 = dayTemperature_1(temperatures)
// console.log(res_1)
