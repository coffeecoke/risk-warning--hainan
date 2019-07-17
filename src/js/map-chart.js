$(function () {
  // 地图echart
  var map = echarts.init($('#map1')[0])
  var renderMap = function () {
    renderMapChart();
  };
  var renderMapChart = function () {
    var riskData = [];
    var levelIcons = {
      low: '../imgs/low.png',
      middleLow:'../imgs/middle-low.png',
      middle: '../imgs/middle.png',
      middleHigh:'../imgs/middle-high.png',
      high: '../imgs/high.png'
    };
    $.ajax({
      url: '../data/mapData.json',
      dataType: 'json',
      async: false,
      success: function (data) {
        $.each(data, function (index, item) {
          var cloneitem = $.extend({},item)
          cloneitem.value = data.riskRating;
          riskData.push(cloneitem);
        });
      }
    });
    map.setOption(option = {
      geo: {
        show: true,
        map: '海南',
        aspectScale: 1,
        regions: [{
          name: '南海诸岛',
          itemStyle: {
            color: "red"
          }
        }],
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: true,
          }
        },
        roam: false, //地图设置不可拖拽，固定的
        itemStyle: {
          normal: {
            areaColor:'#f0f1f7',
            borderColor:'#020272',
            width:2,
            shadowColor: 'rgba(50,98,183, .7)',
            shadowBlur: 20,
            shadowOffsetX: 10,
            shadowOffsetY: 10
          }
        }
      },
      
      toolbox: {
        show: false
      },
      // visualMap: {
      //   show: false,
      //   min: 0,
      //   max: 200,
      //   text: ['风险等级高', '风险等级低'],
      //   realtime: false,
      //   calculable: true,
      //   inRange: {
      //       color: ['#193a94']
      //   },
      //   textGap: 10,
      //   itemHeight: 300,
      //   right: 100,
      //   bottom: 100,
      //   textStyle: {
      //       fontSize: 24,
      //       color: '#fff'
      //   }
      // },
      series: [{
        type: 'map',
        mapType: '海南', // 自定义扩展图表类型
        aspectScale: 1,
        label: {
          normal: {
            show: true,
            formatter: function (params) {
              if (params.data.riskRating == 1) {
                var icon = 'high';
                console.log('{' + icon + '|}\n' + params.name)
                return params.name + '{' + icon + '|}';
              } else if (params.data.riskRating == 2) {
                var icon = 'middleHigh';
                return params.name + '{' + icon + '|}';
              } else if (params.data.riskRating === 3) {
                 var icon = 'middle';
                 return params.name + '{' + icon + '|}';
              } else if (params.data.riskRating === 4) {
                var icon = 'middleLow';
                return params.name + '{' + icon + '|}';
              } else if (params.data.riskRating === 5) {
                var icon = 'low';
                return params.name + '{' + icon + '|}';
              }

            },
            position: 'inside',
            padding: [4, 5],
            textStyle: {
              fontSize: 12,
              color: '#353333'
            },
            rich: {
              low: {
                height: 20,
                align: 'center',
                backgroundColor: {
                  image: levelIcons.low
                }
              },
              middleLow: {
                height: 20,
                align: 'center',
                backgroundColor: {
                  image: levelIcons.middleLow
                }
              },
              middle: {
                width:20,
                height: 50,
                align: 'center',
                backgroundColor: {
                  image: levelIcons.middle
                }
              },
              middleHigh: {
                width:20,
                height: 60,
                align: 'center',
                backgroundColor: {
                  image: levelIcons.middleHigh
                }
              },
              high: {
                width:20,
                height: 60,
                align: 'center',
                backgroundColor: {
                  image: levelIcons.high
                }
              }
            }
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: { //未选中状态
            areaColor:'#f0f1f7',
            borderWidth:1,//边框大小
            borderColor:'#ccd2e3',
            label: {
              show: true //显示名称
            }
          },
          emphasis: { // 也是选中样式

            areaColor: '#3262b7',
            label: {
              show: true,
              color:'#fbfdff',
              fontSize:12
            }
          }
          // normal:{label:{show:true}},
          // emphasis:{label:{show:true}}
        },
        data: riskData
      }]
    });

  };

  renderMap();
  $(window).resize(function () {
    map.resize();
  })
})

$(function () {
  // 地图echart
  var map = echarts.init($('#map2')[0])
  var renderMap = function () {
    var timer = setTimeout(function() {
      clearTimeout(timer)
      renderMapChart();
    },300)
    
  };
  var renderMapChart = function () {
    var riskData = [];
    var levelIcons = {
      low: '../imgs/low.png',
      middleLow:'../imgs/middle-low.png',
      middle: '../imgs/middle.png',
      middleHigh:'../imgs/middle-high.png',
      high: '../imgs/high.png'
    };
    $.ajax({
      url: '../data/mapData.json',
      dataType: 'json',
      async: false,
      success: function (data) {
        $.each(data, function (index, item) {
          var cloneitem = $.extend({},item)
          cloneitem.value = data.riskRating;

          riskData.push(cloneitem);
        });
      }
    });
    map.setOption(option = {
      geo: {
        show: true,
        map: '海南',
        aspectScale: 1,
        regions: [{
          name: '南海诸岛',
          itemStyle: {
            color: "red"
          }
        }],
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: true,
          }
        },
        roam: false, //地图设置不可拖拽，固定的
        itemStyle: {
          normal: {
            areaColor:'#f0f1f7',
            borderColor:'#020272',
            width:2,
            shadowColor: 'rgba(50,98,183, .7)',
            shadowBlur: 20,
            shadowOffsetX: 10,
            shadowOffsetY: 10
          }
        }
      },
      
      toolbox: {
        show: false
      },
      // visualMap: {
      //   show: false,
      //   min: 0,
      //   max: 200,
      //   text: ['风险等级高', '风险等级低'],
      //   realtime: false,
      //   calculable: true,
      //   inRange: {
      //       color: ['#193a94']
      //   },
      //   textGap: 10,
      //   itemHeight: 300,
      //   right: 100,
      //   bottom: 100,
      //   textStyle: {
      //       fontSize: 24,
      //       color: '#fff'
      //   }
      // },
      series: [{
        type: 'map',
        mapType: '海南', // 自定义扩展图表类型
        aspectScale: 1,
        label: {
          normal: {
            show: true,
            formatter: function (params) {
              if (params.data.riskRating == 1) {
                var icon = 'high';
                console.log('{' + icon + '|}\n' + params.name)
                return params.name + '{' + icon + '|}';
              } else if (params.data.riskRating == 2) {
                var icon = 'middleHigh';
                return params.name + '{' + icon + '|}';
              } else if (params.data.riskRating === 3) {
                 var icon = 'middle';
                 return params.name + '{' + icon + '|}';
              } else if (params.data.riskRating === 4) {
                var icon = 'middleLow';
                return params.name + '{' + icon + '|}';
              } else if (params.data.riskRating === 5) {
                var icon = 'low';
                return params.name + '{' + icon + '|}';
              }

            },
            position: 'inside',
            padding: [4, 5],
            textStyle: {
              fontSize: 12,
              color: '#353333'
            },
            rich: {
              low: {
                height: 20,
                align: 'center',
                backgroundColor: {
                  image: levelIcons.low
                }
              },
              middleLow: {
                height: 20,
                align: 'center',
                backgroundColor: {
                  image: levelIcons.middleLow
                }
              },
              middle: {
                width:20,
                height: 50,
                align: 'center',
                backgroundColor: {
                  image: levelIcons.middle
                }
              },
              middleHigh: {
                width:20,
                height: 60,
                align: 'center',
                backgroundColor: {
                  image: levelIcons.middleHigh
                }
              },
              high: {
                width:20,
                height: 60,
                align: 'center',
                backgroundColor: {
                  image: levelIcons.high
                }
              }
            }
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: { //未选中状态
            areaColor:'#f0f1f7',
            borderWidth:1,//边框大小
            borderColor:'#ccd2e3',
            label: {
              show: true //显示名称
            }
          },
          emphasis: { // 也是选中样式

            areaColor: '#3262b7',
            label: {
              show: true,
              color:'#fbfdff',
              fontSize:12
            }
          }
          // normal:{label:{show:true}},
          // emphasis:{label:{show:true}}
        },
        data: riskData
      }]
    });

  };

  renderMap();
  $(window).resize(function () {
    map.resize();
  })
})