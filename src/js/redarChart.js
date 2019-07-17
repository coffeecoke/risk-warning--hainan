$(function () {
    var myChart = echarts.init(document.getElementById('radarChart1'));
    var option = {
        radar: [{
                indicator: [{
                        text: '负面信息',
                        num: 60
                    },
                    {
                        text: '负面信息',
                        num: 20
                    },
                    {
                        text: '浮夸宣传',
                        num: 30
                    },
                    {
                        text: '产品信息异常',
                        num: 40
                    },
                    {
                        text: '行为异常',
                        num: 10
                    },
                    {
                        text: '机构资质可疑',
                        num: 0
                    },
                ],
                center: ['50%', '50%'],
                radius: 60,
                startAngle: 30,
                splitNumber: 4,
                name: {
                    fontSize: 12,
                    color: '#666666',
                    formatter: function (value, indicator) {
                        return indicator.name + '  {value|' + indicator.num + '}'
                    },
                    rich: {
                        value: {
                            color: '#0646ba',
                            fontSize: 20,
                            align: 'center'
                        },

                    },
                    textStyle: {
                        color: '#666666'
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: 'transparent',
                        // shadowColor: 'rgba(0, 0, 0, 0.3)',
                        // shadowBlur: 10
                    }
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    lineStyle: {
                        color: '#e5e9ef'
                    }
                }
            },

        ],
        series: [{
                name: '雷达图',
                type: 'radar',
                itemStyle: {
                    emphasis: {
                        // color: 各异,
                        lineStyle: {
                            width: 1
                        }
                    }
                },
                data: [

                    {
                        value: [60, 20, 30, 40, 10, 0],
                        name: '图二',
                        symbolSize: 0,
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        color: 'rgba(61,121,223,1)',
                                        offset: 0
                                    },
                                    {
                                        color: 'rgba(43,84,178,1)',
                                        offset: 1
                                    }
                                ]),
                                opacity: 0.85,
                            }
                        },
                        lineStyle: {
                            width:0,
                            color: "#5a8ee5"
                        }
                    }
                ]
            },

        ]
    }
    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    })
})
$(function () {
    var myChart2 = echarts.init(document.getElementById('radarChart2'));
    var option2 = {
        radar: [{
                indicator: [{
                        text: '负面信息',
                        num: 60
                    },
                    {
                        text: '负面信息',
                        num: 20
                    },
                    {
                        text: '浮夸宣传',
                        num: 30
                    },
                    {
                        text: '产品信息异常',
                        num: 40
                    },
                    {
                        text: '行为异常',
                        num: 10
                    },
                    {
                        text: '机构资质可疑',
                        num: 0
                    },
                ],
                center: ['50%', '50%'],
                radius: 60,
                startAngle: 30,
                splitNumber: 4,
                name: {
                    fontSize: 12,
                    color: '#666666',
                    formatter: function (value, indicator) {
                        return indicator.name + '  {value|' + indicator.num + '}'
                    },
                    rich: {
                        value: {
                            color: '#0646ba',
                            fontSize: 20,
                            align: 'center'
                        },

                    },
                    textStyle: {
                        color: '#666666'
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: 'transparent',
                        // shadowColor: 'rgba(0, 0, 0, 0.3)',
                        // shadowBlur: 10
                    }
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    lineStyle: {
                        color: '#e5e9ef'
                    }
                }
            },

        ],
        series: [{
                name: '雷达图',
                type: 'radar',
                itemStyle: {
                    emphasis: {
                        // color: 各异,
                        lineStyle: {
                            width: 1
                        }
                    }
                },
                data: [

                    {
                        value: [60, 20, 30, 40, 10, 0],
                        name: '图二',
                        symbolSize: 0,
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        color: 'rgba(61,121,223,1)',
                                        offset: 0
                                    },
                                    {
                                        color: 'rgba(43,84,178,1)',
                                        offset: 1
                                    }
                                ]),
                                opacity: 0.85,
                            }
                        },
                        lineStyle: {
                            width:0,
                            color: "#5a8ee5"
                        }
                    }
                ]
            },

        ]
    }
    myChart2.setOption(option2);
    window.radarChart2 = myChart2
    $(window).resize(function () {
        myChart2.resize();
    })
})