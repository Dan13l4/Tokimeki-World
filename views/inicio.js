export default () => {
    const principalPage = `
    <div class="logo">
        <img src="./img/logoprincipal.png" alt="tokiLogo" class="imagenLogo">
    </div>

    <div class="contenedor">
        <p class="inicioTexto">¡Bienvenido a Tokimeki Memorial world! En este lugar encontraras las guías de los diferentes juegos de Tokimeki, estamos en constante actualización así que no dudes en visitarnos. Escoge uno de los juegos para acceder a su guía:</p>

        <div class="btn">
            <button class="btnes"><img src="./img/btnUno.png" alt="tokimekiUno"></button>
            <button class="btnes"><img src="./img/btnDos.png" alt="tokimekiDos"></button>
            <button class="btnes"><img src="./img/btnTres.png" alt="tokimekiTres"></button>
            <button class="btnes tokiCuatro" id="tokicuatro" href='#/newPost'><img src="./img/btnCuatro.png" alt="tokimekiCuatro" id="tokicuatro"></button>
        </div>
    </div>

    <div id="modal" class="modalHidden">
          <div><button class="btn-close" id="close">Close</button> </div>
          <div id="segundaseccion"></div>
        </div>
    `;

    const divElem = document.createElement('section');
    divElem.className = 'inicial';
    divElem.innerHTML = principalPage;

    divElem.querySelector("#tokicuatro").addEventListener("click", () => {
        document.getElementById("modal").style.display= "flex";
        document.getElementById("segundaseccion").innerHTML = `holi`;
    })

    return divElem;
}