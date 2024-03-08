//------INTERACCION CON EL SERVIDOR
//------Comprobar con el servidor que el usuario se encuentra logueado
let objeto = {
    'id_usua': localStorage.getItem('id_usua'),
    'nombre_usua': localStorage.getItem('nombre_usua'),
    'apellido_usua': localStorage.getItem('apellido_usua')
}
objeto = JSON.stringify(objeto);
fetch('../sesionIniciada', {
    method: "POST",
    body: objeto
}).then(response => response.text()).then(data => {
    if (data != 1){
        window.open('./loginUp.html',"_self");
    }
})