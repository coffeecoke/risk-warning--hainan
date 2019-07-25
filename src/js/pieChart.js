$(function () {
    var myChart = echarts.init(document.getElementById('pieChart'));
    var chartName = ['高风险企业', '中高风险企业', '中风险企业', '中低风险企业', '低风险企业'];
    var chartData = ['20', '30', '40', '200', '590']
    var data = []
    for (var i = 0; i < chartData.length; i++) {
        var c = {
            value: chartData[i],
            name: chartName[i]
        }
        data[i] = c;
    }
    var option = {
        backgroundColor: '#fff',
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {d}% <br/> {c}"
        },
        legend: {
            orient: 'vertical',
            x: '60%',
            y: 'center',
            itemWidth: 8,
            itemHeight: 8,
            align: 'left',
            textStyle: {
                fontSize: 14,
                color: '#595959',
            },
            formatter: function (name) {
                function DataLength(fData) {
                    var intLength = 0
                    for (var i = 0; i < fData.length; i++) {
                        if ((fData.charCodeAt(i) < 0) || (fData.charCodeAt(i) > 255))
                            intLength = intLength + 2
                        else
                            intLength = intLength + 1
                    }
                    return intLength
                }

                for (var i = 0; i < data.length; i++) {
                    if (name === data[i].name) {
                        if(DataLength(name)===10) {
                            return name + '      ' + data[i].value + '家'
                        }else {
                            return name + '   ' + data[i].value + '家'
                        }
                        
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            radius: ['35%', '50%'],
            center: ['30%', '50%'],
            color: ['#e24e35', '#ffa000', '#38b4ee', '#4caf50', '#3b5dbe'],
            data: data,
            labelLine: {
                normal: {
                    show: false,
                    length: 20,
                    length2: 20,
                    lineStyle: {
                        color: '#12EABE',
                        width: 2
                    }
                }
            },
            label: {
                normal: {
                    show: false,
                    formatter: '{c|{c}}\n{hr|}\n{d|{d}%}',
                    rich: {
                        b: {
                            fontSize: 20,
                            color: '#12EABE',
                            align: 'left',
                            padding: 4
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        d: {
                            fontSize: 20,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        c: {
                            fontSize: 20,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        }
                    }
                }
            }
        }]
    };
    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    })
})