export default () => {
    const kazuki = `
    <div class="todito">
            <div class="itemsTres">
                <button class="btnes" id="volver"><img src="./img/volver.png" alt="volver" class="volve"></button>
                <div class="conteinarTokiUno">
                <br>
                <br>
                    <p>
                      <h3 class="tituloantesde">Kazuki Kei</h3>
                    <br>
                    <img src="./img/chicos/Hazuki-Kei.jpg" alt="Hazuki" class="Hazuki">
                    <br>
                    
                </div>
            </div>
        </div>
    `;

    const divElem = document.createElement('section');
    divElem.className = 'kazuki';
    divElem.innerHTML = kazuki;

    divElem.querySelector("#volver").addEventListener("click", () => {
        window.location.hash = '#/chicos';
    })

    return divElem;
}