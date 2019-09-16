let ctx = document.getElementById('bar-chart').getContext('2d')
Chart.defaults.global.defaultFontFamily ='Lato';
Chart.defaults.global.defaultFontSize ='12';
Chart.defaults.global.defaultFontColor ='#777';
let charGraph = new Chart(ctx,{
    type:'bar',
    data:{
        labels:['January','February','March','April','May'],
        datasets:[{
            label:'Sales Last Year',
            data:[50,40,70,34,44],
            backgroundColor:'blue',
            borderWidth:1,
            borderColor:'rgba(77,166,253,0.85)',
            hoverBorderWidth:1.5,
            hoverBorderColor:'white',
        },
        {
        label:'Sales This Year',
        data:[60,22,40,74,64],
        backgroundColor:'violet',
        borderWidth:1,
        borderColor:'rgba(77,166,253,0.85)',
        hoverBorderWidth:1.5,
        hoverBorderColor:'white',

        }]


    },
    options:{
        title:{
            display:true,
            text:'Our Sales',
            fontSize:30,
            fontColor:'rgba(54,162,235,0.6)'
            
        },
        legend:{
            position:'right',
            labels:{
            fontColor:'#000'
            }

        },
        layout:{
            padding:{
                left:10,
                right:0,
                bottom:0,
                top:0,
            },
        },
        toolkit:{
            enabled:true,
        },
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:true,
                    fontSize:16,
                    fontColor:'black',
                    callback:function(value,index,values){
                        return value +` Units`
                    }
                }
            }],
            xAxes:[{ticks:{
                    fontSize:16,
                    fontColor:'black',

                   }
            }]                      
        },
        tooltips:{
            mode:'index',
            callbacks:{
                label:function(tooltipItem,data){
                    return data.datasets[tooltipItem.datasetIndex].label + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
                }
            }
        }
    }
   

})
