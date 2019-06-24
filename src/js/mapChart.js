$(function () {
    var myChart = echarts.init(document.getElementById('map-chearts'));
    var uploadedDataURL = "../json/hainan.json";
    var nameMap = '海南省';
    var hbmap = [{
        name: '儋州市',
        value: '98'
    }, {
        name: '文昌市',
        value: '2223'
    }, {
        name: '文昌市',
        value: '437'
    }, {
        name: '文昌市',
        value: '385'
    }, {
        name: '文昌市',
        value: '768'
    }, {
        name: '东方市',
        value: '1233'
    }, {
        name: '海口市',
        value: '1633'
    },{
        name: '万宁市',
        value: '98'
    }, {
        name: '澄迈县',
        value: '222'
    }, {
        name: '白沙县',
        value: '37'
    }, {
        name: '琼海市',
        value: '85'
    }, {
        name: '昌江县',
        value: '78'
    }, {
        name: '临高县',
        value: '133'
    }, {
        name: '陵水县',
        value: '133'
    }, {
        name: '屯昌县',
        value: '85'
    }, {
        name: '定安县',
        value: '78'
    }, {
        name: '保亭县',
        value: '133'
    }, {
        name: '五指山市',
        value: '33'
    }];
    var option = [
        {
            type: 'map',
            map: nameMap,
            aspectScale: 0.75, //长宽比
            left: '2%',
            // right: '35%',
            top: 10,
            width: '50%',
            height: '90%',
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#0C1564',
                    borderColor: '#00effc',
                    borderWidth: 1.5,
                    label: {
                        show: true,
                        color: '#fff',
                    },
    
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                }
            },
    
            data: hbmap
    
        }
    ];
    myChart.setOption(option);
});