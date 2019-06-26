$(function () {
    var myChart1 = echarts.init(document.getElementById('radarChart'));
 var option1 = {
    radar: [
        {
            indicator: [
                { text: '负面信息' ,num:60 },
                { text: '负面信息' ,num:20},
                { text: '浮夸宣传',num:30 },
                { text: '产品信息异常' ,num:40},
                { text: '行为异常' ,num:10},
                { text: '机构资质可疑' ,num:0},
            ],
            center: ['50%', '50%'],
            radius: 60,
            startAngle: 30,
            splitNumber: 4,
            name: {
                fontSize: 12,
                formatter:function(value,indicator){
                    return indicator.name + ' ' + indicator.num 
                },
                textStyle: {
                    color:'#fff'
                }
            },
            splitArea: {
                areaStyle: {
                    color:'transparent',
                    // shadowColor: 'rgba(0, 0, 0, 0.3)',
                    // shadowBlur: 10
                }
            },
            axisLine: {
                show:false,
            },
            splitLine: {
                lineStyle: {
                    color:'#2d50a4'
                }
            }
        },
        
    ],
    series: [
        {
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
                    value: [60, 20, 30, 40,10,0],
                    name: '图二',
                    symbolSize:0,
                    areaStyle: {
                        normal: {
                            color:new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                                {
                                    color: '#a6bfeb',
                                    offset: 0
                                },
                                {
                                    color: '#5f82b9',
                                    offset: 1
                                }
                            ]),
                            opacity:1,
                            shadowColor:"#4e69a3",
                            shadowBlur:100
                        }
                    },
                    lineStyle:{
                        color:"#4e69a3"
                    }
                }
            ]
        },
       
    ]
}

myChart1.setOption(option1);
})