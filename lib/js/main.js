//释放逻辑
function onDrop (event, ui) {
  console.log('drop')
  // debugger
  let to = $(event.target).children({'class': 'echarts'}).first()
  let from = ui.draggable[0]
  // debugger
  //如果是菜单图表选项
  if($(from).data('type') === 'type') {
    vm.$data.dialog = true
    vm.$data.gridId = to.id
    return 
  } else { //如果来自图表视图
    // console.log(to)
    let posFrom = $(from).data('position')
    let posTo = $(to).data('position')
    let posOptionFrom = vm.$data.options.find(o => {
      return o[0]  === posFrom
    })
    let posOptionTo = vm.$data.options.find(o => {
      return o[0]  === posTo
    })

    // console.log(optionFrom)
    // console.log(optionTo)
    let indexFrom = vm.$data.options.indexOf(posOptionFrom)
    let indexTo = vm.$data.options.indexOf(posOptionTo)
    console.log(indexFrom, indexTo)
    posOptionFrom = vm.$data.options.splice(indexFrom, 1)[0]
    posOptionTo = vm.$data.options.splice(indexTo, 1)[0]
    vm.$data.options.push([posFrom, posOptionTo[1]])
    vm.$data.options.push([posTo, posOptionFrom[1]])

    // debugger
    // from.innerHTML = ''
    // to.innerHTML = ''
    // let fromIndex = $(from).data('index')
    // let toIndex = $(to).data('index')
    // // debugger
    // $(from).data('index', '')
    // $(to).data('index', '')
    // if($(from).is('.ui-draggable'))
    //   $(from).draggable('disable')
    // if($(to).is('.ui-draggable'))
    //   $(to).draggable('disable')
    // let toOption = ''
    // let fromOption = ''
    // if(!isNaN(toIndex)) {
    //   toOption = Object.create(vm.$data.options[toIndex])
    //   vm.$data.options[from.id - 'a'] = toOption
    //   vm.$data.options[toIndex] = null
    //   $(from).data('index', toIndex)
    //   createChart(from.id, toOption)
    // }
    // if(!isNaN(fromIndex)) {
    //   fromOption = Object.create(vm.$data.options[fromIndex])
    //   vm.$data.options[to.id - 'a'] = fromOption
    //   vm.$data.options[fromIndex]  =null
    //   $(to).data('index', fromIndex)
    //   createChart(to.id, fromOption)
    // }
  }
}

// 初始化拖拽
function makeDrag(dom) {
  $(dom).draggable({
    helper: function () {
      let oldCanvas = $(dom).find('canvas')[0]
      let oldCtx = oldCanvas.getContext('2d')
      let canvas = document.createElement('canvas')
      $(canvas).css('width', ($(oldCanvas).css('width')))
      $(canvas).css('height', ($(oldCanvas).css('height')))
      canvas.width = oldCanvas.width
      canvas.height = oldCanvas.height
      let ctx = canvas.getContext('2d')
      let data = oldCtx.getImageData(0, 0, oldCanvas.width, oldCanvas.height)
      ctx.putImageData(data, 0, 0)
      $(canvas).css('z-index', 1000)
      return ctx.canvas
    },
    cursor: "move",
    start(event, ui) {
      console.log(event)
      console.log(ui)
      console.log('start')
    }
  })
}

//调整大小
function resize() {
  // debugger
  let resizeUndefined = chartArr.some(c => {
    return !c.resize
  })
  if (resizeUndefined) {
    console.log('resize undefined')
    return
  }
  chartArr.forEach(chart => {
    // debugger
    if (chart === null) {
      return
    }
    if (chart) {
      if (chart.resize) {
        chart.resize()
      }
    }
  })
}

//创建图表逻辑
function createChart(id, option) {
  let dom = document.getElementById(id)
  //如果dom元素之前未初始化拖拽，还要初始化
  if(!$(dom).is('.ui-draggable')) {
    makeDrag(dom)
  }
  else {
    $(dom).draggable('enable')
  }
  if (dom.chart) {
    let index = chartArr.indexOf(dom.chart)
    dom.chart.dispose()
    dom.chart = echarts.init(dom)
    chartArr.splice(index, 1, dom.chart)

  } else {
    dom.chart = echarts.init(dom)
  }
  if(option) {
    dom.chart.setOption(option)
  }
  return dom.chart
}



//split拉伸结束逻辑
function onDragEnd() {
  console.log('drag end')
  // setTimeout(resize, 500)
  // resize()
}


