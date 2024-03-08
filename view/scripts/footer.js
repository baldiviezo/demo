//------footer
const footer = document.querySelector('footer');
footer.innerHTML = `
    <img src="../img/logout.svg" class="logout">
    <div>
        <button id="moduleOne">Modulo 1</button>
        <button id="moduleTwo">Modulo 2</button>
    </div>
`;
//------Change module
const footer__buttons = document.querySelectorAll('footer div button');
footer__buttons.forEach(button =>{
    button.addEventListener('click', ()=>{window.open(`./${button.id}.html`,"_self")})
});
//------Close
const logout = document.querySelector('.logout');
logout.addEventListener('click', ()=>{window.open(`./close.html`,"_self")});
