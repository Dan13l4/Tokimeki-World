export default () => {
    const chicos = `
    <div class="todito">
            <div class="itemsTres">
                <button class="btnes" id="volver"><img src="./img/volver.png" alt="volver" class="volve"></button>
                <h1 class="titulosobrecitas">✨Personajes✨</h1>
                <div class="imgCita">
                    <img src="./img/tokimeki1girls.jpg" alt="tokiUNO" class="imagenTokiUno">
                </div>
                <div class="conteinarTokiUno">
                <br>
                <br>
                    <p>
                      <h3 class="tituloantesde">Chicos Principales:</h3>
                    <br>
                    <br>
                    <button class="btnes" id="hazuki"><img src="./img/btnKazuki.png" alt="hazuki" class="hazuki"></button>
                    <br>
                    <button class="btnes" id="sakuya"><img src="./img/btnSakuya.png" alt="sakuya" class="sakuya"></button>
                    <br>
                    <button class="btnes" id="kazuma"><img src="./img/btnKazuma.png" alt="kazuma" class="kazuma"></button>
                    <br>
                    <button class="btnes" id="madoka"><img src="./img/btnMadoka.png" alt="madoka" class="madoka"></button>
                    <br>
                    <button class="btnes" id="shiki"><img src="./img/btnShiki.png" alt="shiki" class="shiki"></button>
                    <br>
                    <button class="btnes" id="wataru"><img src="./img/btnWataru.png" alt="wataru" class="wataru"></button>
                    <br>
                    <button class="btnes" id="reiichi"><img src="./img/btnHimuro.png" alt="reiichi" class="reiichi"></button>
                    <br>
                    <button class="btnes" id="ikkaku"><img src="./img/btnIkkaku.png" alt="ikkaku" class="ikkaku"></button>
                    <br>
                    </p>
                    <br>
                    <p>
                    <h3 class="titulodos">Chicos secretos:</h3>
                    </p>
                    <br>
                    <button class="btnes" id="aoki"><img src="./img/btnAoki.png" alt="aoki" class="aoki"></button>
                    <br>
                    <button class="btnes" id="jin"><img src="./img/btnJin.png" alt="jin" class="jin"></button>
                    <br>
                    <h3 class="titulodos">Personajes extras:</h3>
                    <br>
                    <button class="btnes" id="goro"><img src="./img/btnGoro.png" alt="goro" class="goro"></button>
                    <br>
                    <button class="btnes" id="tsu"><img src="./img/btnTsu.png" alt="tsu" class="tsu"></button>
                    <br>
                    <button class="btnes" id="garrison"><img src="./img/btnGarrison.png" alt="garrison" class="garrison"></button>
                    <br>
                    <button class="btnes" id="yoshi"><img src="./img/btnYoshi.png" alt="yoshi" class="yoshi"></button>
                    <br>
                    <br>
                    
                </div>
            </div>
        </div>
    `;

    const divElem = document.createElement('section');
    divElem.className = 'chicos';
    divElem.innerHTML = chicos;

    divElem.querySelector("#volver").addEventListener("click", () => {
        window.location.hash = '#/tokimekiUno';
    })

    divElem.querySelector("#hazuki").addEventListener("click", () => {
        window.location.hash = '#/HazukiKei';
    })

    divElem.querySelector("#sakuya").addEventListener("click", () => {
        window.location.hash = '#/SakuyaMorimura';
    })

    divElem.querySelector("#kazuma").addEventListener("click", () => {
        window.location.hash = '#/KazumaSuzuka';
    })

    return divElem;
}