var ctx =  document.getElementById('bar').getContext('2d');

var barChart = new Chart(ctx,{
    type: 'bar',
    data: {
        labels: ['小学1年生', '中学1年生', '高校1年生','大学1年'],
        datasets:[
            {
                type: 'line',
                label: '私の身長の経緯',
                data:[107, 140, 145, 147.5],
                backgroundColor:[
                    'rgba(75, 192, 192, 0.2)',
                    
                ]
            }
        ]
    },
    options:{
        scales: {
            yAxes:[{
                ticks:{
                    beginAtZero: true
                }
            }]
        }
    }
});