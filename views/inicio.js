export default () => {
    const principalPage = `
    <div class="logo">
        <img src="./img/logoprincipal.png" alt="tokiLogo" class="imagenLogo">
    </div>

    <div class="contenedor">
        <p class="inicioTexto">¡Bienvenido a Tokimeki Memorial world! En este lugar encontraras las guías de los diferentes juegos de Tokimeki, estamos en constante actualización así que no dudes en visitarnos. Escoge uno de los juegos para acceder a su guía:</p>

        <div class="btn">
            <button class="btnes" id="guiaUno"><img src="./img/btnUno.png" alt="tokimekiUno"></button>
            <button class="btnes"><img src="./img/btnDos.png" alt="tokimekiDos"></button>
            <button class="btnes"><img src="./img/btnTres.png" alt="tokimekiTres"></button>
            <button class="btnes tokiCuatro" id="tokicuatro"><img src="./img/btnCuatro.png" alt="tokimekiCuatro" id="tokicuatro"></button>
        </div>
    </div>

    <div id="modal" class="modalHidden">
          <div id="segundaseccion"></div>
          <div><button class="btn-close btnes" id="close"><img src="./img/aceptar.png" alt="aceptar"></button> </div>
        </div>
    `;

    const divElem = document.createElement('section');
    divElem.className = 'inicial';
    divElem.innerHTML = principalPage;

    divElem.querySelector("#tokicuatro").addEventListener("click", () => {
        document.getElementById("modal").style.display= "flex";
        document.getElementById("segundaseccion").innerHTML = `
        <div>
            <img src="./img/chibiRyota.PNG" alt="ryota">
            <p class="tokicuatroaaa">¡Esta guía aun no esta implementada! Perdona por los inconvenientes, se espera que este lista para cuando la version de Tokimeki memorial 4 llegue a occidente.</p>
        </div>
        `;
    })

    divElem.querySelector("#close").addEventListener("click", () => { 
        document.getElementById("modal").style.display= "none";
    })

    divElem.querySelector("#guiaUno").addEventListener("click", () => { 
        window.location.hash = '#/tokimekiUno';
    })

    return divElem;
}