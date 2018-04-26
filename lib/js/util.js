//生成英文字母id
function genCharArray(charA, charZ) {
  var a = [],
    i = charA.charCodeAt(0),
    j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}

function randomIndexArray(len) {
  let res = []
  let arr = []
  for (let i = 0; i< len; i++) {
    arr.push(i)
  }
  function getRandomIndex(num) {
    return Math.floor(Math.random() * num)
  }
  for(let i = len; i > 0; i--) {
    let index = arr.splice(getRandomIndex(i), 1)[0]
    res.push(index)
  }
  return res
}

function initChartArr(length) {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push(createChart(charArr[i]))
  }
  return arr
}
// chartArr.forEach((chart, i) => {
//   chart.setOption(options[i])
//   $(chart._dom).data('index', i)
// })

