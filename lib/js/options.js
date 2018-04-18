var data = [];

for (var i = 0; i <= 360; i++) {
  var t = i / 180 * Math.PI;
  var r = Math.sin(2 * t) * Math.cos(2 * t);
  data.push([r, i]);
}

let options = [{
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  },
  {
    series: {
      type: 'sunburst',
      data: [{
        name: 'A',
        value: 10,
        children: [{
          value: 3,
          name: 'Aa'
        }, {
          value: 5,
          name: 'Ab'
        }]
      }, {
        name: 'B',
        children: [{
          name: 'Ba',
          value: 4
        }, {
          name: 'Bb',
          value: 2
        }]
      }, {
        name: 'C',
        value: 3
      }]
    },
  },

  {
    title: {
      text: '堆叠区域图'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
      type: 'value'
    }],
    series: [{
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        areaStyle: {
          normal: {}
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        areaStyle: {
          normal: {}
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        areaStyle: {
          normal: {}
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        areaStyle: {
          normal: {}
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: {
          normal: {}
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  },

  {
    title: {
      text: '极坐标双数值轴'
    },
    legend: {
      data: ['line']
    },
    polar: {
      center: ['50%', '54%']
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    angleAxis: {
      type: 'value',
      startAngle: 0
    },
    radiusAxis: {
      min: 0
    },
    series: [{
      coordinateSystem: 'polar',
      name: 'line',
      type: 'line',
      showSymbol: false,
      data: data
    }],
    animationDuration: 2000
  },

  {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
  },

  {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
},

{
  xAxis: {},
  yAxis: {},
  series: [{
      symbolSize: 20,
      data: [
          [10.0, 8.04],
          [8.0, 6.95],
          [13.0, 7.58],
          [9.0, 8.81],
          [11.0, 8.33],
          [14.0, 9.96],
          [6.0, 7.24],
          [4.0, 4.26],
          [12.0, 10.84],
          [7.0, 4.82],
          [5.0, 5.68]
      ],
      type: 'scatter'
  }]
},

{
  xAxis: {
      data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
  },
  yAxis: {},
  series: [{
      type: 'k',
      data: [
          [20, 30, 10, 35],
          [40, 35, 30, 55],
          [33, 38, 33, 40],
          [40, 40, 32, 42]
      ]
  }]
},

{
  title: {
      text: '漏斗图',
      subtext: '纯属虚构'
  },
  tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c}%"
  },
  toolbox: {
      feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {}
      }
  },
  legend: {
      data: ['展现','点击','访问','咨询','订单']
  },
  calculable: true,
  series: [
      {
          name:'漏斗图',
          type:'funnel',
          left: '10%',
          top: 60,
          //x2: 80,
          bottom: 60,
          width: '80%',
          // height: {totalHeight} - y - y2,
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 2,
          label: {
              normal: {
                  show: true,
                  position: 'inside'
              },
              emphasis: {
                  textStyle: {
                      fontSize: 20
                  }
              }
          },
          labelLine: {
              normal: {
                  length: 10,
                  lineStyle: {
                      width: 1,
                      type: 'solid'
                  }
              }
          },
          itemStyle: {
              normal: {
                  borderColor: '#fff',
                  borderWidth: 1
              }
          },
          data: [
              {value: 60, name: '访问'},
              {value: 40, name: '咨询'},
              {value: 20, name: '订单'},
              {value: 80, name: '点击'},
              {value: 100, name: '展现'}
          ]
      }
  ]
}
]