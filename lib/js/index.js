// let chartArr = []
// let charArr = genCharArray('a', 'z')


//图标初始化
// chartArr = initChartArr(8)

//register chart
Vue.component('chart', VueECharts)





$('#left-chart-nav li').draggable({
  helper: function() {
    let p = document.createElement('p')
    // console.log($(this).text().replace(/\s+/g, ''))
    p.innerText = $(this).text().replace(/\s+/g, '')
    $(p).css({
      'font-size': '2em',
      'color': 'red'
    })
    return p
  },
  cursorAt: [0, 0],
  start() {
    console.log('start')
  }
})

Vue.component('code-snippet', {
  template: '#code', 
  props: ['code']
})
Vue.component('draggable', {
  template: '#draggable',
  props: ['option'],
  methods: {
    ondragstart(ev) {
      console.log('drag start')
      // debugger
      console.log(ev.target)
      
      // let img = new Image()
      // let canvas = this.dragHelper(ev.target)
      console.log(this.option)
      // let _canvas = canvas.cloneNode(true)

      // img.onload = function() {
      //   document.body.appendChild(canvas)
      // }
      // let image = new Image()
      // image.src =  canvas.toDataURL()
      // image.onload = function() {
        // ev.dataTransfer.setDragImage(image, 0, 0)

      // }
    },
    dragHelper(dom) {
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
    ondragover() {

    }
  },
  mounted() {
    // debugger
    // let helper = this.dragHelper(this.$el)
    
    // this.$el.appendChild(helper)
  }
})

let vm = new Vue({
  el: '#app',
  data: {
    dialog: false,
    links: [
      {text: 'link1', value: 'link1'},
      {text: 'link2', value: 'link2'}
    ],
    currentLink: -1,
    code: {a: 'fef', b: 'ffeef'},
    gridId: '',
    options: []
  
    // JSON.stringify({a: 'fef', b: 'ffeef'}, null, 4)
  },
  methods: {
    ondragstart() {
      console.log('custom drag start')
    },
    onclick() {
      console.log('clicked')
    },
    save() {
      console.log('save')
      // debugger
      let dom = document.getElementById(this.gridId)
      let index = $(dom).data('index')
      $(dom).data('index', '')
      if (!isNaN(index)) {
        options.splice(index, 1)
        // let chart = chartArr[index]
        // chart.dispose()
        chartArr.splice(index, 1)
      }
      index = options.push(testOption) - 1
      $(dom).data('index', index)
      chartArr.push(createChart(this.gridId, options[index]))
      
    },
    onready() {
      console.log('ready')
    }
  },
  computed: {
    positionMap() {
      let _obj = {}
      this.options.forEach((o, i) => {
        _obj[o[0]] = o[1]
      })
      return _obj
    }
  },
  created() {
    console.log('created')
  },
  mounted() {
    // debugger
    console.log('mounted')
    //resize
    Split(['#one', '#two', '#three'], {
      sizes: [20, 60, 20],
      minSize: 200,
      onDragEnd: () => {c.resize()}
    });

    Split(['#a', '#b'], {
      direction: 'vertical'
    })
    Split(['#d'], {
      direction: 'vertical'
    })
    Split(['#g', '#h'], {
      direction: 'vertical'
    })

    //drag
    // $('.echarts').each((index, el) => {
    //   makeDrag(el)
    // })

    //模拟请求
    // let _randomIndexArr = randomIndexArray(options.length)
    let _randomIndexArr = options.map((_, i) => i)
    console.log(_randomIndexArr)
    Promise.resolve(options).then((options) => {
      let _options  = options.map((option, i) => {
        return [_randomIndexArr[i], option]
      })
      console.log(_options)
      this.options = _options
      // _options.forEach((option, i) => {
      //   option[0]
      //   option[1]
      // })
    })


    //中国地图 vuechart不支持地图的格式
    let dom = document.getElementById('d')
    let c = echarts.init(dom)
    c.setOption(chineseMap)
    dom.onresize = function() {
      c.resize()
    }
    //调整大小
    window.onresize = function() {
      c.resize()
    }


    //droppable
    $('.draggable').droppable({
      classes: {
        // "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      helper: true,
      revert: true,
      drop: onDrop
    })
        
  },
})
