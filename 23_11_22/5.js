const aString = 'ezupkr'
const bString = 'ubmrapg'

// 预期 2  ur
// 输出 3?? 最后一个i++不对吧
// 不行
const findMaxSameString = (text1, text2) => {
  let res = 0
  // let time = 0
  for (let i = 0; i < text1.length; ) {
    for (let j = 0; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        res++
        i++
      }
      if (i === text1.length) {
        // 如果 i 达到 text1 的末尾，跳出循环
        break
      }
      // time++
      // console.log(i, j)
    }
    i++
  }
  // console.log(time)
  return res
}

const res = findMaxSameString(aString, bString)
console.log(res)
