/********************************User restrictions*******************************/
if(localStorage.getItem('rol_usua') == 'Operador'){
    document.querySelector('.table__header').classList.add('hide');
    document.querySelectorAll('.form__radio')[1].classList.add('hide');
    document.getElementsByName('email_usuaM')[0].setAttribute('readonly','');
    document.getElementsByName('nombre_usuaM')[0].setAttribute('readonly','');
    document.getElementsByName('apellido_usuaM')[0].setAttribute('readonly','');
    document.getElementsByName('ci_usuaM')[0].setAttribute('readonly','');
    document.getElementsByName('direccion_usuaM')[0].setAttribute('readonly','');
    document.getElementsByName('celular_usuaM')[0].setAttribute('readonly','');
}else if(localStorage.getItem('rol_usua') == 'Administrador'){
    document.querySelectorAll('.form__radio')[0].children[2].classList.add('hide');
    document.querySelectorAll('.form__radio')[0].children[3].classList.add('hide');
    document.querySelectorAll('.form__radio')[1].children[0].classList.add('hide');
    document.querySelectorAll('.form__radio')[1].children[1].classList.add('hide');
    document.querySelectorAll('.form__radio')[1].children[2].classList.add('hide');
    document.querySelectorAll('.form__radio')[1].children[3].classList.add('hide');
}
/************************************Show users***********************************/
//------Read users
let usuarios ={};
readUsers();
function readUsers() {
    let tbodyUsers = document.getElementById("tbodyUsers");
    tbodyUsers.innerHTML = '';
    let formData = new FormData();
    formData.append('readUsers', '');
    fetch('../readUsers', {
            method: "POST",
            body: formData
    }).then(response => response.json()).then(data => {
        usuarios = data;
        tableUsers();
    }).catch(err => console.log(err));
}
//------Show users table
function  tableUsers(){
    let i = 1;
        for(let usuario in usuarios){
            let tr = document.createElement('tr');
            for(let columna in usuarios[usuario]){
                if(columna == 'id_usua'){
                    let td = document.createElement('td');
                    td.innerText = usuarios[usuario][columna];
                    td.setAttribute('hidden', '');
                    tr.appendChild(td);
                    td = document.createElement('td');
                    td.innerText = i;
                    tr.appendChild(td);
                    i++;
                }else{
                    let td = document.createElement('td');
                    td.innerText = usuarios[usuario][columna];
                    tr.appendChild(td);
                }
            }
            let td = document.createElement('td');
            if(localStorage.getItem('rol_usua')=='Gerente general'){
                if(usuarios[usuario]['rol_usua'] == 'Gerente general'){
                    td.innerHTML = ``;
                }else{
                    td.innerHTML = `
                    <img src='../img/edit.svg' onclick='readUser(this.parentNode.parentNode)'>
                    <img src='../img/trash.svg' onclick='deleteUser(this.parentNode.parentNode)'>`;
                }
            }else if(localStorage.getItem('rol_usua') == 'Administrador'){
                if(usuarios[usuario]['rol_usua'] == 'Gerente general'){
                    td.innerHTML = ``;
                }else if(usuarios[usuario]['rol_usua'] == 'Administrador'){
                    if (localStorage.getItem('id_usua') == usuarios[usuario]['id_usua']){
                        td.innerHTML = `<img src='../img/edit.svg' onclick='readUser(this.parentNode.parentNode)'>`;
                    }
                }else{
                    td.innerHTML = `
                    <img src='../img/edit.svg' onclick='readUser(this.parentNode.parentNode)'>
                    <img src='../img/trash.svg' onclick='deleteUser(this.parentNode.parentNode)'>`;
                }
            }else{
                if (localStorage.getItem('id_usua') == usuarios[usuario]['id_usua']){
                    td.innerHTML = `
                    <img src='../img/edit.svg' onclick='readUser(this.parentNode.parentNode)'>`;
                }
            }
            tr.appendChild(td);
            tbodyUsers.appendChild(tr);
        }
}
/***************************************CRUD users*******************************/
//------Create user
document.getElementById("formUsersR").addEventListener("submit", createUser);
function createUser(){
    event.preventDefault();
    let pass1 = document.getElementsByName("contraseña_usua_R")[0];
    let pass2 = document.getElementsByName("contraseña2_usua_R")[0];
    if(pass1.value == pass2.value){
        event.preventDefault();
        const inputs = document.querySelectorAll('#formUsersR input.form__input');
        const objeto = {
            'nombres': inputs[0].value,
            'apellidos': inputs[1].value,
            'pass': inputs[2].value,
            'email': inputs[4].value,
            'ci': inputs[5].value,
            'direccion': inputs[6].value,
            'celular': inputs[7].value,
            'rol': document.querySelector("input[name='rol_usua_R']:checked").value
        }
        formRegistrar = JSON.stringify(objeto); 
        
        fetch('../registrarUsuario', {
            method: "POST",
            body: formRegistrar
        }).then(response => response.text()).then(data => {
            usersRMW.classList.remove('modal__show');
            readUsers();
            cleanUpFormRegister();
            
        }).catch(err => console.log(err));
    }else{
        alert("Las contraseñas no son iguales");
    }
}
//------Read user
function readUser (usuario){
    let id_usua = usuario.children[0].innerText;
    for(let usuario in usuarios){
        if(usuarios[usuario]['id_usua']==id_usua){
            for(let columna in usuarios[usuario]){
                if(columna == 'rol_usua'){
                    if (usuarios[usuario][columna]=='Administrador'){
                        document.getElementById('admiM').checked = true;
                    }
                    if (usuarios[usuario][columna]=='Operador'){
                        document.getElementById('opeM').checked = true;
                    }
                }else if(columna == 'contraseña_usuaM'){
                    document.getElementsByName(columna)[0].value = '';
                }else{
                    document.getElementsByName(columna+'M')[0].value = usuarios[usuario][columna];
                }
            }
            break;
        }
    }
    document.getElementsByName('contraseña_usuaM')[0].value = '';
    document.getElementsByName('contraseña2_usuaM')[0].value = '';
    usersMMW.classList.add('modal__show');
}
//------Delete user
function deleteUser (usuario){
    let id_usua = usuario.children[0].innerText;
    if (confirm('¿Esta usted seguro?')){
        fetch('../eliminarUsuario', {
            method: "POST",
            body: id_usua
        }).then(response => response.text()).then(data => {
            if (data!=""){
                readUsers();
            }
        }).catch(error => console.log("Ocurrio un error. Intente nuevamente mas tarde"));
    }
}
//------Actualizar usuario
/*document.getElementById("formUsersM").addEventListener("submit", updateUser);
function updateUser(){
    let pass1 = document.getElementsByName("contraseña_usuaM")[0];
    let pass2 = document.getElementsByName("contraseña2_usuaM")[0];
    if(pass1.value == pass2.value){
        event.preventDefault();
        let form = document.getElementById("formUsersM");
        let formData = new FormData(form);
        formData.append('updateUser', 'guardar');
        fetch('../modificarUsuario', {
                method: "POST",
                body: formData
        }).then(response => response.text()).then(data => {
            if (data=="modificado"){
                cleanUpFormModify();
                usersMMW.classList.remove('modal__show');
                readAllCustomers();
            }else{
                alert(data);
            }
        }).catch(err => console.log(err));
    }else{
        event.preventDefault();
        alert("Las contraseñas no son iguales");
    }
}*/


//<<------------------------ABRIR Y CERRAR VENTANAS MODALES--------------------------------->>
const usersRMW = document.getElementById('usersRMW');
const usersMMW = document.getElementById('usersMMW');  
const openUsersRMW = document.getElementById('openUsersRMW');
const closeUsersRMW = document.getElementById('closeUsersRMW');
const closeUsersMMW = document.getElementById('closeUsersMMW'); 
openUsersRMW.addEventListener('click',(e)=>{
    usersRMW.classList.add('modal__show');
});
closeUsersRMW.addEventListener('click',(e)=>{
    usersRMW.classList.remove('modal__show');
});
closeUsersMMW.addEventListener('click',(e)=>{
    usersMMW.classList.remove('modal__show');
});




//<<----------------------------ESPACIOS OBLIGATORIOS Y LIMPIAR LOS CAMPOS DE LOS FORMULARIOS------------------------------------------>>
const allInputs = document.querySelectorAll('.form .form__group input');
const modifyInputs = document.querySelectorAll('#formUsersM .form__group input');
const registerInputs = document.querySelectorAll('#formUsersR .form__group input');
//------Vuelve oblogatorios los campos del formulario 
espaciosObligatorios();
function espaciosObligatorios(){
    allInputs.forEach(input => {
        input.setAttribute("required","");
        input.setAttribute('autocomplete','off');
    });
    document.getElementsByName("rol_usua_R")[0].setAttribute("required","");
    document.getElementsByName("rol_usua_R")[1].setAttribute("required","");
    //para el formulario de modificar
    document.getElementsByName("id_usuaM")[0].setAttribute("hidden","");
}
//------Limpia los formualrios registrar y modificar
function cleanUpFormModify(){
    document.getElementsByName("id_usuaM")[0].value = "";
    modifyInputs.forEach(input => input.value = "");
    //limpiar radio button
    if(document.getElementById('opeM').checked){
        document.getElementById('opeM').checked = false;
    }
    if(document.getElementById('admiM').checked){
        document.getElementById('admiM').checked = false;
    }
}
function cleanUpFormRegister(){
    registerInputs.forEach(input => input.value = "");
    //limpiar radio button
    if(document.getElementById('opeR').checked){
        document.getElementById('opeR').checked = false;
    }
    if(document.getElementById('admiR').checked){
        document.getElementById('admiR').checked = false;
    }
}