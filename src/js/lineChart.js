$(function(){
    var myChart = echarts.init(document.getElementById('lineChart'));
    var option = {
        tooltip: {
            trigger: 'axis',
            backgroundColor: '#fff',  // 提示背景颜色，默认为透明度为0.7的黑色
            borderColor: '#ccc',            // 提示边框颜色
            borderRadius: 4,
            padding:10,
            
            textStyle:{
                color:"#000"
            },   
            axisPointer : {            // 坐标git轴指示器，坐标轴触发有效
                type : 'line',       // 默认为直线，可选为：'line' | 'shadow'
                backgroundColor:'rgba(239,246,255,0,8)',
                lineStyle:{
                    width:80,
                    // type:"shadow",
                    shadowColor:"#f7faff",
                    opacity:0.5,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 0.9,
                        colorStops: [{
                            offset: 0, color: '#f7faff',opacity:'0.1' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#e3eeff',opacity:'0.1' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                },
                shadowStyle : {              // 阴影指示器样式设置
                    width: 'auto',         // 阴影大小
                    backgroungColor: 'rgba(239,246,255,0,1)'  // 阴影颜色
                }
            },
            extraCssText: 'box-shadow: 0 0 8px rgba(52, 148, 253, 0.3)' ,
        },
        color:["#4888f8","#fad240","#f86a6a"],
        legend: {
            data: [
                {name:'预警信息'},
                {name:'线索'},
                {name:'领导交办'}
            ],
            left:'right',
            top:5
        },
        xAxis: [{
            type: 'category',
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLine:{
                show:true,
                onZero: false,
                lineStyle: {
                    color: '#656565'
                }
            },

            data: ['201812', '201901','201902','201903','201904','201905']
        
            }
        ],
        yAxis:{
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:"15%",
            containLabel: true
        },
        series: [
           
            {
                name: '预警信息',
                type: 'line',
                smooth: false,
                data: [25, 60, 20, 80, 23, 42],
                lineStyle: {
                    normal: {
                        color: '#4888f8'
                    }
                }
            },
            {
                name: '线索',
                type: 'line',
                smooth: false,
                data: [50, 40, 70, 60, 100, 80],
                lineStyle: {
                    normal: {
                        color: '#ff6976'
                    }
                }
            },
            {
                name: '领导交办',
                type: 'line',
                smooth: false,
                data: [20, 50, 100, 150, 200, 250],
                lineStyle: {
                    normal: {
                        color: '#fed478'
                    }
                }
            }
            
        ]
    };

    myChart.setOption(option);
})