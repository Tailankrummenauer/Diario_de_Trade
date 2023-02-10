const labels = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
]


var ctx = document.getElementById("myChart");


var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: labels,
        datasets: [
            {
                label: "Financeiro",
                data: [700, 800, 900, 1000, 1100, 1200, 1300, 900, 1500, 1600, 1800, 1200],
                backgroundColor: [
                    'rgba(41, 128, 185,0.8)',
                    'rgba(41, 128, 185,0.8)',
                    'rgba(52, 73, 94,0.8)',
                    'rgba(44, 62, 80,0.8)',
                    'rgba(149, 165, 166,0.8)',
                    'rgba(127, 140, 141,0.8)'
                ],
                borderColor: [
                    'rgba(41, 128, 185,1.0)',
                    'rgba(41, 128, 185,1.0)',
                    'rgba(52, 73, 94,1.0)',
                    'rgba(44, 62, 80,1.0)',
                    'rgba(149, 165, 166,1.0)',
                    'rgba(127, 140, 141,1.0)'
                ],

                tension: 0.3,
                
            },

        ],
    },
    options: {
        animation: {
            duration: 2000,
            easing: 'easeOutBounce'
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        },
        legend: {
            display: true,
            position: 'bottom'
        },
        title: {
            display: true,
            text: 'Financeiro por mês',
            fontSize: 20
        },
        tooltips: {
            enabled: true,
            intersect: true,
            backgroundColor: 'rgba(41, 128, 185,0.8)'
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                position: 'bottom'
            }],
            yAxes: [{

                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }]
        }
    }
});

