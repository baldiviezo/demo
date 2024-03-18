const buttom__moduleOne = document.querySelector('#moduleTwo');
buttom__moduleOne.classList.add('active');

//-----gauges
const svg_vPac = document.querySelector('#svg_vPac');
const svg_cPac = document.querySelector('#svg_cPac');
const svg_fPac = document.querySelector('#svg_fPac');
const vPac = document.querySelector('#vPac');
const cPac = document.querySelector('#cPac');
const fPac = document.querySelector('#fPac');
setInterval(()=>{
    fetch('../pac3200', {
        method: "POST"
    }).then(response => response.json()).then(data => {
        vPac.innerHTML = `${data.voltaje_pac} V`;
        cPac.innerHTML = `${data.corriente_pac} Amp`;
        fPac.innerHTML = `${data.frecuencia_pac} Hz`;
        let arc_vPac = svg_vPac.getTotalLength()
        let value_vPac = data.voltaje_pac * (arc_vPac/250)
        svg_vPac.style.strokeDasharray = `${value_vPac} ${arc_vPac}`;

        let arc_cPac = svg_cPac.getTotalLength()
        let value_cPac = data.corriente_pac * (arc_cPac/10)
        svg_cPac.style.strokeDasharray = `${value_cPac} ${arc_cPac}`;

        let arc_fPac = svg_fPac.getTotalLength()
        let value_fPac = data.frecuencia_pac * (arc_fPac/60)
        svg_fPac.style.strokeDasharray = `${value_fPac} ${arc_fPac}`;


    }).catch(err => console.log(err));

}, 1000)