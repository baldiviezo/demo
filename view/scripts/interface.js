//------Header
const header = document.querySelector('header');
header.innerHTML = `
    <div class="header__left">
    </div>
    <div class="header__right">
        <div class="header__top">
            <h1>DEMO "SISTEMA DE BOMBAS ALTERNADAS"</h1>
            <img src="../img/menu.svg" class="header__menu">
        </div>
        <div class="header__bottom">
            <div class="container">
                <div class="key" id="rol">Operador</div>
                <div class="value" id="userLoggedIn"></div>
            </div>
            <div class="container">
                <div class="key">Fecha y hora</div>
                <div id="showDate"></div>
            </div>
        </div>
    </div>
`;
//------Datos del usuario que se mostraran en header
const rol = document.querySelector('#rol');
rol.innerText = `${localStorage.getItem('rol_usua')}`;
const userLoggedIn = document.querySelector('#userLoggedIn');
userLoggedIn.innerText = `${localStorage.getItem('nombre_usua')} ${localStorage.getItem('apellido_usua')}`;
//------Fecha que se mostrara en header
const showDate = document.querySelector('#showDate');
setInterval(() => {
    let date = new Date();
    let month = date.getMonth() + 1;
    function dateCorrection(number){
        if(number <= 10){
            let string = '0'+number;
            return string; 
        }else{
            return number;
        }
    }   
    showDate.innerText = `${dateCorrection(date.getDate())}-${dateCorrection(month)}-${date.getFullYear()} ${dateCorrection(date.getHours())}:${dateCorrection(date.getMinutes())}:${dateCorrection(date.getSeconds())}`;
}, 1000);
//------Side bar
const sideBar = document.querySelector('.sideBar');
sideBar.innerHTML = `
    <div class="sideBar__container">
        <div class="sidebar__header">
            <img src="../img/x.svg" class="sidebar__close">
        </div>
        <div class="sidebar__body">
            <ul class="nav__list">
                <li><a href="./moduleOne.html" class="nav__link">Modulos</a></li>
                <li><a href="./users.html" class="nav__link">Usuarios</a></li>
                <li><a href="./trends.html" class="nav__link">Tendencias</a></li>
                <li><a href="./historical.html" class="nav__link">Historicos</a></li>
                <li><a href="./close.html" class="nav__link">Cerrar sesión</a></li>
            </ul>
        </div>
    </div>
`;
const header__menu = document.querySelector('header .header__menu');
const sideBar__close = document.querySelector('.sidebar__header');
header__menu.addEventListener('click', () => {
    sideBar.classList.add('modal__show');
});
sideBar__close.addEventListener('click', () => {
    sideBar.classList.remove('modal__show');
});

