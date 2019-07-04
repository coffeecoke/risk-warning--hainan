$(function () {
    var myChart = echarts.init(document.getElementById('radarChart1'));
    var option = {
      
      tooltip: {
        trigger: 'axis'
      },
      radar: {
        indicator: [{
          text: '三亚市',
          max: 100
        }, {
          text: '昌江县',
          max: 100
        }, {
          text: '乐东县',
          max: 100
        }, {
          text: '白沙县',
          max: 100
        }, {
          text: '湛州市',
          max: 100
        },{
          text: '东方市',
          max: 100
        },{
            text: '万宁市',
            max: 100
          }, {
            text: '琼海市',
            max: 100
          }, {
            text: '文昌市',
            max: 100
          }, {
            text: '海口市',
            max: 100
          }],
        splitNumber: 4,
        name: {
          textStyle: {
            color: '#000'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#fff',
            width: 2,
            type: 'dotted'
          },
        },
        splitLine: {
          lineStyle: {
            color: ['#eeeeee'],
            width: 2
          }
        },
        splitArea: {
          areaStyle: {
            color: ['#fff']
          }
        }
      },
      series: [{
        type: 'radar',
        // tooltip: {
        //   trigger: 'item'
        // },
        symbol: 'circle',
        symbolSize: 0,
        itemStyle: {
          normal: {
            //color: '',
             //borderColor: 'yellow'
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
              [{
                offset: 0,
                color: '#95b8fc'
              }, {
                offset: 1,
                color: '#95b8fc'
              }], false)
          }
        },
        lineStyle: {
          normal: {
              color: '#3a59b0',
              type: 'solid',
              width: 1
          }
        },
        data: [{
          value: [60, 33, 15, 50, 60, 33, 80, 50, 70,30],
          name: '风险维度'
        }]
      }, ]
    };
    myChart.setOption(option);
    $(window).resize(function () {
      myChart.resize();
    })
  })