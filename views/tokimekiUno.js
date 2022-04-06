export default () => {
    const guiaUno = `
        <div class="todito">
            <div class="items">
                <button class="btnes" id="volver"><img src="./img/volver.png" alt="volver" class="volve"></button>
                <div class="imagenes">
                    <img src="./img/logoTokimekiUno.png" alt="tokiUNO" class="logotokiUno">
                    <img src="./img/chicosTokimekiUno.png" alt="tokiUNO" class="imagenTokiUno">
                </div>
                <div class="conteinarTokiUno">
                    <p>Tokimeki Memorial Girls Side 1st Love Plus es un juego de genero otome game (juegos para chicas) o simulador de citas, en el cual podrás tener citas con los chicos que tu quieras, pero deberás de cumplir con ciertos parámetros para conseguir su final.</p>
                    <button class="btnes tokiuno" id="informacion"> <img src="./img/informacionbasica.png" alt=""> </button>
                    <button class="btnes tokiuno" id="citas"> <img src="./img/sobrecitas.png" alt="sobrecitas"> </button>
                    <button class="btnes tokiuno"> <img src="./img/personajes.png" alt="personajes"> </button>
                    <button class="btnes tokiuno"> <img src="./img/rivales.png" alt="rivales"> </button>
                </div>
            </div>
        </div>
    `;
    const divElem = document.createElement('section');
    divElem.className = 'guiaTokiUno';
    divElem.innerHTML = guiaUno;

    divElem.querySelector("#volver").addEventListener("click", () => {
        window.location.hash = '#/';
    })

    divElem.querySelector("#citas").addEventListener("click", () => {
        window.location.hash = '#/citas';
    })

    return divElem;
}