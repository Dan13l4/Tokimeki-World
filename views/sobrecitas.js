export default () => {
    const citas = `
        <div class="todito">
            <div class="itemsDos">
                <button class="btnes" id="volver"><img src="./img/volver.png" alt="volver" class="volve"></button>
                <h1 class="titulosobrecitas">✨Sobre las citas✨</h1>
                <div class="imgCita">
                    <img src="./img/cita.png" alt="tokiUNO" class="imagenTokiUno">
                </div>
                <div class="conteinarTokiUno">
                    <p>
                      <h3 class="tituloantesde">Antes de poder invitar a uno de los chicos a una cita te recomiendo:</h3>
                    <br>
                    -Puedes conseguir el numero del chico que quieras con tu hermano Tsukushi.
                    <br>
                    <br>
                    -Asegurate de tener la ropa adecueda para usar en la cita. Si por ejemplo vas a
                    algún lugar relacionado con la natación, primero consigue un buen traje de baño. no entres en tu
                    traje escolar, porque eso es raro y el chico te lo hara saber. Si hace frío afuera, consigue una chaqueta, O
                    una bufanda.
                    <br>
                    <br>
                    -Guarda antes de ir, porque podrías dar una respuesta incorrecta, o tambien puede que metetas la pata
                    en el skinship.
                    <br>
                    <br>
                    -Guarda antes de invitar a un chico a una cita, cabe la posibilidad de que te rechaze :').
                    </p>
                    <br>
                    <p>Siguiendo los pasos de arriba recuerda tambien que para tener una cita excelente lleva una ropa que al chico le guste, trata de escoger la mejor respuesta
                    y trata de llevarlos a un lugar que al chico le guste, no repitas sitios dos veces ya que es probable que al chico no le guste.</p>
                    <br>
                    <h3 class="titulodos">Despues de la cita:</h3>
                    <img src="./img/citados.png" alt="tokiUNO" class="imagenTokiUno">
                    <br>
                    <br>
                    <p class="despuesde"><b>Si su afecto es :D o superior:</b> Si durante la cita tuviste respuestas correctas y el chico disfruta hay una posibilidad de que te pida de exterder mas la cita, puedes darle a la
                    primera opcion para aceptar. El objetivo de esto es tener el mayor numero de skinships, al final de la cita el chico te dejara en tu casa y mas
                    tarde te mandara un mensaje diciendo que lo paso bien en la cita.</p>
                    <p class="despuesde"><b>Si su afecto es :):</b> Al final de la cita el chico te acompañara a tu casa y si todo fue bien te mandara un mensaje
                    destacando que le gusto de la cita.</p>
                    <p class="despuesde"><b>Si su afecto es :/ o inferior:</b> El chico se despide y cada quien para su casa.</p>
                </div>
            </div>
        </div>
    `;
    const divElem = document.createElement('section');
    divElem.className = 'citas';
    divElem.innerHTML = citas;

    divElem.querySelector("#volver").addEventListener("click", () => {
        window.location.hash = '#/tokimekiUno';
    })

    return divElem;
}