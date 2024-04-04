const buttom__moduleOne = document.querySelector('#moduleOne');
buttom__moduleOne.classList.add('active');
//*******INTERACCION CON EL SERVIDOR
//------Solicitud de variables del servidor 
const lineBar = document.querySelector('#lineBar');
const textBar = document.querySelector('#textBar');
const lineBarH = document.querySelector('#lineBarH');
const textBarH = document.querySelector('#textBarH');
/*text indicadores */
const textvalvula = document.querySelector('#textOPE');
//let varOPE = 'OFF';
const textBomba1 = document.querySelector('#textBomba1');
//let varBomba1 = 'OFF';
const textBomba2 = document.querySelector('#textBomba2');
//let varBomba2 = 'OFF';
/*led indicadores */
const ledModo = document.querySelector('#ledModo');
const ledOPE = document.querySelector('#ledOPE');
const ledBomba1 = document.querySelector('#ledBomba1');
const ledBomba2 = document.querySelector('#ledBomba2');
const ledValvula = document.querySelector('#ledValvula');

const timeBomba1 = document.querySelector('#timeBomba1');
const timeBomba2 = document.querySelector('#timeBomba2');
setInterval(() => {
    fetch('../variables', {
        method: "POST"
    }).then(response => response.json()).then(data => {
        /*Modo */
        data.modo_var == 1 ? ledModo.setAttribute('style', 'background-color: rgb(0,128,0); box-shadow: 0rem 0rem .5rem .2rem rgb(0,128,0)') : ledModo.setAttribute('style', 'background-color: rgb(155,156,157); box-shadow: 0rem 0rem .5rem .2rem rgb(155,155,157)');
        /*OPE */
        data.ope_var == 1 ? ledOPE.setAttribute('style', 'background-color: rgb(0,128,0); box-shadow: 0rem 0rem .5rem .2rem rgb(0,128,0)') : ledOPE.setAttribute('style', 'background-color: rgb(155,156,157); box-shadow: 0rem 0rem .5rem .2rem rgb(155,155,157)');
        /*Bomba1 */
        data.bomba1_var == 1 ? ledBomba1.setAttribute('style', 'background-color: rgb(0,128,0); box-shadow: 0rem 0rem .5rem .2rem rgb(0,128,0)') : ledBomba1.setAttribute('style', 'background-color: rgb(155,156,157); box-shadow: 0rem 0rem .5rem .2rem rgb(155,155,157)');
        /*bomba 2 */
        data.bomba2_var == 1 ? ledBomba2.setAttribute('style', 'background-color: rgb(0,128,0); box-shadow: 0rem 0rem .5rem .2rem rgb(0,128,0)') : ledBomba2.setAttribute('style', 'background-color: rgb(155,156,157); box-shadow: 0rem 0rem .5rem .2rem rgb(155,155,157)');
        /*valvula */
        data.valvula_var == 1 ? ledValvula.setAttribute('style', 'background-color: rgb(0,128,0); box-shadow: 0rem 0rem .5rem .2rem rgb(0,128,0)') : ledValvula.setAttribute('style', 'background-color: rgb(155,156,157); box-shadow: 0rem 0rem .5rem .2rem rgb(155,155,157)');

        /*nivel */
        textBar.innerText = `${data['nivel_var']}%`;
        lineBar.style.height = `${data['nivel_var']}%`;
        /*nivel Horizontal*/
        textBarH.innerText = `${data['nivel_var']}%`;
        lineBarH.style.width = `${data['nivel_var']}%`;
        /* tiempo*/
        timeBomba1.innerHTML = `${data['hrb1_var']}:${data['minb1_var']}`;
        timeBomba2.innerHTML = `${data['hrb2_var']}:${data['minb2_var']}`;
    }).catch(err => console.log(err));
}, 1000);

/********************************************BUTTOM ON AND OFF Modo OPE BOMBA 1 BOMBA 2  valvula*******************************/
const onButtomModo = document.getElementById('onButtomModo');
const offButtomModo = document.getElementById('offButtomModo');

const onButtomOPE = document.getElementById('onButtomOPE');
const offButtomOPE = document.getElementById('offButtomOPE');

const onButtomBomba1 = document.getElementById('onButtomBomba1');
const offButtomBomba1 = document.getElementById('offButtomBomba1');

const onButtomBomba2 = document.getElementById('onButtomBomba2');
const offButtomBomba2 = document.getElementById('offButtomBomba2');

const onButtomValvula = document.getElementById('onButtomValvula');
const offButtomValvula = document.getElementById('offButtomValvula');

onButtomModo.addEventListener('click',()=>{
    fetch('../buttomModo', {
        method: "POST",
        body: 1
    }).then(response => response.text()).then(data => {
    }).catch(err => console.log(err));
})
offButtomModo.addEventListener('click',()=>{
    fetch('../buttomModo', {
        method: "POST",
        body: 0
    }).then(response => response.text()).then(data => {
    }).catch(err => console.log(err));
})
onButtomOPE.addEventListener('click',()=>{
    fetch('../buttomOPE', {
        method: "POST",
        body: 1
    }).then(response => response.text()).then(data => {
    }).catch(err => console.log(err));
})
offButtomOPE.addEventListener('click',()=>{
    fetch('../buttomOPE', {
        method: "POST",
        body: 0
    }).then(response => response.text()).then(data => {
    }).catch(err => console.log(err));
})
onButtomBomba1.addEventListener('click',()=>{
    fetch('../buttomBomba1', {
        method: "POST",
        body: 1
    }).then(response => response.text()).then(data => {
    }).catch(err => console.log(err));
})
offButtomBomba1.addEventListener('click',()=>{
    fetch('../buttomBomba1', {
        method: "POST",
        body: 0
    }).then(response => response.text()).then(data => {
    }).catch(err => console.log(err));
})
onButtomBomba2.addEventListener('click',()=>{
    fetch('../buttomBomba2', {
        method: "POST",
        body: 1
    }).then(response => response.text()).then(data => {
    }).catch(err => console.log(err));
})
offButtomBomba2.addEventListener('click',()=>{
    fetch('../buttomBomba2', {
        method: "POST",
        body: 0
    }).then(response => response.text()).then(data => {
    }).catch(err => console.log(err));
})
onButtomValvula.addEventListener('click',()=>{
    fetch('../buttomValvula', {
        method: "POST",
        body: 1
    }).then(response => response.text()).then(data => {
    }).catch(err => console.log(err));
})
offButtomValvula.addEventListener('click',()=>{
    fetch('../buttomValvula', {
        method: "POST",
        body: 0
    }).then(response => response.text()).then(data => {
    }).catch(err => console.log(err));
})



/*************************************************Ventana modal chart**************************************************/
//------Ventana modal chart
const chartNivelMW = document.querySelector('#chartNivelMW');
const pencilNivel = document.querySelector('#pencil');
pencilNivel.addEventListener('click', chartNivel);
function chartNivel() {
    chartNivelMW.classList.add('modal__show');
    //myChart.update();
}
const closechartNivelMW = document.querySelector('#closechartNivelMW');
closechartNivelMW.addEventListener('click', () => {
    chartNivelMW.classList.remove('modal__show');
    /*const { scales: { x, y } } = myChart.config.options;
    x.min = 0;
    x.max = 0;
    myChart.config.options.scales.x.time.unit = 'day';
    myChart.update();*/
})
//------chart
let arrayUndefined = [];
let arrayCount = [];
const data = {
    datasets: [{
        data: arrayUndefined,
        label: "Nivel",
        borderColor: 'rgba(0,161,209,1)',
        backgroundColor: 'rgba(0,161,209,1)',
        borderWidth: 1,
    }]
}
//hoverLine pluging block
const hoverLine = {
    id: 'hoverLine',
    //para q no se sobreponga dibujar la linea despues de mostra la informacion en un cuadro
    afterDatasetDraw(chart, args, plugins) {
        const { ctx, tooltip, chartArea: { top, bottom, left, right, width, height }, scales: { x, y } } = chart;
        if (tooltip._active.length > 0) { //cuando el mause esta sobre un punto el array ya no esta vacio
            //console.log(args)
            const xCoor = args.meta.data[tooltip.dataPoints[0].dataIndex].x;
            const yCoor = args.meta.data[tooltip.dataPoints[0].dataIndex].y;
            ctx.save();
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(0,0,0,1)';
            ctx.moveTo(xCoor, top);
            ctx.lineTo(xCoor, bottom);
            ctx.stroke();

            //hoverline
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(0,0,0,1)';
            ctx.moveTo(xCoor, yCoor);
            ctx.lineTo(right, yCoor);
            ctx.stroke();
            ctx.closePath();
            //texto
            //hovertext
            ctx.beginPath();
            ctx.fillStyle = 'black';
            //roundRect(x, y, width, height, radii)
            ctx.roundRect(right, yCoor - 10, 30, 18, 0);
            ctx.fill();

            ctx.font = 'bold 10px sans-serif';
            ctx.fillStyle = 'rgba(0,161,209,1)';
            ctx.textAlign = 'center';
            //context.fillText(text, x, y, maxWidth)
            ctx.fillText(Math.round(y.getValueForPixel(yCoor)), right + 10, yCoor);

        }
    }
}
//Margen de la legenda
const legendMargin = {
    id: 'legendMargin',
    beforeInit(chart, legend, options) {
        const fitValue = chart.legend.fit;
        chart.legend.fit = function fit() {
            fitValue.bind(chart.legend)();
            return this.height += 20;
        }
    }
}
//labelTooltip
const labelTooltip = (tooltipItems) => {
    return '';
}
//Scala de chart
let min_x, max_x, min_y, max_y;
let const_min_x, const_max_x, const_min_y, const_max_y, const_left, const_right, const_top, const_bottom;
let i;
let c;
//Cuadrantes
const quadrants = {
    id: 'quadrants',
    beforeDatasetDraw(chart, args, plugins) {
        const { ctx, chartArea: { left, right, top, bottom, width, height }, scales: { x, y } } = chart; //width = right - left, height = bottom - top
        //valores de cuadrante
        //console.log(x)
        min_x = x.min;
        max_x = x.max;
        min_y = y.min;
        max_y = y.max;
        //CADA VEZ QUE SE MUEVE EL MOUSE DENTRO DEL CANVAS ENTRA AQUI
        //console.log(x.min+' '+x._valueRange+' '+y.min+' '+ y._valueRange)
        if (i == 0) {
            i++;
            const_left = left;
            const_right = right;
            const_top = top;
            const_bottom = bottom;
            const_min_x = x.min;
            const_max_x = x.max;
            const_min_y = y.min;
            const_max_y = y.max;
        }
    }
}
const config = {
    type: 'line',
    data,
    options: {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day'  //year,day,hour,min
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
        },
        interaction: {
            interaction: false,
        },
        plugins: {
            legend: {
                align: 'start' //La legenda empieza desde la izquierda
            },
            tooltip: {
                position: 'top', //que apresca arriba
                yAlign: 'buttom', // que la flecha se ponga abajo
                displayColors: false,
                callbacks: {
                    label: labelTooltip
                },
                backgroundColor: 'rgba(31,33,33,1)',
                titleColor: 'rgba(0, 161, 209, 1)',
                titleAlign: 'center',
                //borderColor: '#94969d',
                borderWidth: 5
            },
            zoom: {
                zoom: {
                    wheel: {
                        enabled: true,
                    }
                }
            }

        },
        tooltip: {
        }
    },
    plugins: [quadrants, legendMargin, hoverLine],
}
var chart = document.getElementById('chart');
var myChart = new Chart(chart, config);
//Evento click
function clickHandler(click) {
    quadrantZoom(click.offsetX, click.offsetY)
}
myChart.canvas.onclick = clickHandler;
function quadrantZoom(puntoX, puntoY) {
    if (puntoX < const_left || puntoY < const_top || puntoX > const_right || puntoY > const_bottom) {
    } else {
        const { scales: { x, y } } = myChart.config.options;
        //left
        if (puntoX < ((const_right + const_left) / 2)) {
            x.max = (max_x - min_x) / 2 + min_x;
            if (x.max - min_x < 86400000) {
                myChart.config.options.scales.x.time.unit = 'second';
            }
            arrayCount.push({ 'x_min': min_x, 'x_max': x.max, 'y_min': y.min, 'y.max': y.max });
        
            //right
        } else if (puntoX > ((const_right + const_left) / 2)) {
            x.min = (max_x - min_x) / 2 + min_x;
            if (x.max - min_x < 86400000) {
                myChart.config.options.scales.x.time.unit = 'second';
            }
            arrayCount.push({ 'x_min': x.min, 'x_max': max_x, 'y_min': y.min, 'y.max': y.max });
        
        }
        myChart.update();
    }
}
function resetZoom() {
    const { scales: { x, y } } = myChart.config.options;
    x.min = const_min_x;
    x.max = const_max_x;
    y.min = const_min_y;
    y.max = const_max_y;
    myChart.config.options.scales.x.time.unit = 'day';
    myChart.update();
    arrayCount = [];
    arrayCount.push({ 'x_min': x.min, 'x_max': x.max, 'y_min': y.min, 'y.max': y.max });
}
//position tooltip
Chart.Tooltip.positioners.top = function (elements, eventPosition) {
    const { chartArea: { top }, scales: { x, y } } = this.chart;
    return {
        x: x.getPixelForValue(x.getValueForPixel(eventPosition.x)),
        y: top
    }
}

function readNivel() {
    fetch('../graficas', {
        method: "POST",
    }).then(response => response.json()).then(data => {
        datosNivel = data;
        datosNivel.forEach(element => {
            arrayUndefined.push({ x: new Date(`${element.fecha_nvl.slice(0, 10)}T${element.hora_nvl}`), y: element.valor_nvl })
        });
        showChart();
        //Tarda en graficar, No poner myChart.update() aqui
    }).catch(err => console.log(err));
}

//------show chart
function showChart() {
    i = 0;
    c = 1;
    const { scales: { x, y } } = myChart.config.options;
    arrayCount = [];
    arrayCount.push({ 'x_min': x.min, 'x_max': x.max, 'y_min': y.min, 'y.max': y.max });
    myChart.update();
}
function backChart() {
    if (arrayCount.length - c > 0) {
        const { scales: { x, y } } = myChart.config.options;
        //left
        c++;
        if (x.max - x.min > 43200000) {
            myChart.config.options.scales.x.time.unit = 'day';
        }
        x.min = arrayCount[arrayCount.length - c].x_min;
        x.max = arrayCount[arrayCount.length - c].x_max;
        myChart.update();
        
    }
}


/**********chage of view***************/
const viewOne = document.querySelector('main div.viewOne');
const viewTwo = document.querySelector('main div.viewTwo');
const nivelVertical = document.querySelector('main div.nivelVertical');
const nivelHorizontal = document.querySelector('main div.nivelHorizontal');

function showViewOne() {
    //nivelHorizontal.setAttribute('hidden', '');
    //nivelVertical.removeAttribute('hidden');
    viewTwo.setAttribute('hidden', '');
    viewOne.removeAttribute('hidden');
}
function showViewTwo() {
    //nivelHorizontal.setAttribute('hidden', '');
    //nivelVertical.removeAttribute('hidden');
    viewOne.setAttribute('hidden', '');
    viewTwo.removeAttribute('hidden');
}
function showNV() {
    nivelHorizontal.setAttribute('hidden', '');
    nivelVertical.removeAttribute('hidden');
}
function showNH() {
    //nivelHorizontal.setAttribute('hidden', '');
    //nivelVertical.removeAttribute('hidden');
    nivelVertical.setAttribute('hidden', '');
    nivelHorizontal.removeAttribute('hidden');
}