let trendNivel = {};
let arrayUndefined = [];
trendNivel = {
    datasets: [{
        data: arrayUndefined,
        label: "Nivel",
        borderColor: 'rgba(0,161,209,1)',
        backgroundColor: 'rgba(0,161,209,1)',
        borderWidth: 1,
    }]
}
const config = {
    type: 'line',
    data: trendNivel,
    options: {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'hour'  //year,day,hour,min
                }
            },
            y: {
                //beginAtZero: true
            }
        },
        layout: {
            padding: { //espacio entre la etiqueta  cambas y el grafico
                top: 10,
                right: 20,
                bottom: 0,
                left: 20
            }
        },
        animation: false,  //desabilita la animacion de subida
        elements: {
            point: {
                radius: 0 // ya no muestra los puntos
            }
        }
    }
}
var chart = document.getElementById('chart');
var myChart = new Chart(chart, config);
myChart.update();


setInterval(() => {
    fetch('../trendNivel', {
        method: "POST"
    }).then(response => response.json()).then(data => {
        datosNivel = data.reverse();
        arrayUndefined = [];
        datosNivel.forEach(element => {
            arrayUndefined.push({ x: new Date(`${element.fecha_nvl.slice(0, 10)}T${element.hora_nvl}`), y: element.valor_nvl })
        });
        myChart.config.data.datasets[0].data = arrayUndefined;
        myChart.update();
    }).catch(err => console.log(err));

}, 1000);





