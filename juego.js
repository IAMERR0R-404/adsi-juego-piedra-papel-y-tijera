//variables constantes
const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";

const EMPATE = 0;
const GANO = 1;
const PERDIO = 2;



/* codigo que recoge los id por los botones  */
//const es una variable que no puede ser alterado, es de solo lectura
//getElementByID es donde recibomos la informacion que asignamos a los botones
const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultext = document.getElementById("titulo");
const usrimg = document.getElementById("usrimg");
const pcimg = document.getElementById("pcimg");



//registrar un evento o accion a un boton
piedraBtn.addEventListener("click", ()=>{
    play(PIEDRA);
});

papelBtn.addEventListener("click", ()=>{
    play(PAPEL);
});

tijeraBtn.addEventListener("click", ()=>{
    play(TIJERA);
});





function play(usrOption){
     /* imagen que escogio el usuario dependiendo de la opcion */
    usrimg.src = "img/"+usrOption+".png";

    /* Esto aparecer mientras termina el tiempo para ejecutar la funcion */
    resultext.innerHTML = "Escogiendo"

    /* hace que la imagen donde aparece el resultado aleatorio este cambiando constantemente */
    const interval = setInterval(function(){
        const pcOpcion = calcPCOption();
        pcimg.src = "img/"+pcOpcion+".png";

    },200);
 


    /* esta funcion hace que la funcion de eleccion aleatoria tenga un retraso para ejecutarse en pantalla */
    setTimeout(function (){

        /* hace que el intervalo se detenga y muestre la imagen aleatoria */
        clearInterval(interval);

        //Se crea una variable donde aparecera un numero random
    const pcOpcion = calcPCOption();

    const result = calcResultado(usrOption, pcOpcion);


    /* imagen del aleatorio dependiendo de la opcion escogida */
    pcimg.src = "img/"+pcOpcion+".png";

    /* switch para imprimir el resultado */
    switch(result){
        case EMPATE:
            resultext.innerHTML = "Haz Empatado :/";
            console.log(pcOpcion);
            break;
        case GANO:
            resultext.innerHTML = "Haz Ganado :D";
            break;
        case PERDIO:
            resultext.innerHTML = "Haz Perdido :c";
            break;
    }

    /* despues del corchete de la funcion de declara el tiempo */
    },2000);


    



}

//-------------------------------------------------------------------------------------------------
function calcPCOption(){
    const numero = Math.floor(Math.random() * 3);

    switch (numero) {
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;
    }
}

//-------------------------------------------------------------------------------------------
/* condiciones del juego */
function calcResultado(usrOption, pcOpcion){

    /* Condicion empate */
    if(usrOption===pcOpcion){
        return EMPATE;
    }
    /* condicion piedra */
        else if(usrOption === PIEDRA){

            if(pcOpcion === PAPEL){
                return PERDIO;
            }
                else if(pcOpcion === TIJERA){
                    return GANO;
                }

         }
        /* condicon papel */
            else if(usrOption === PAPEL){

                if(pcOpcion === TIJERA){
                    return PERDIO;
                }
                    else if(pcOpcion === PIEDRA){
                        return GANO;
                    }
            }
            /* condicon tijera */
            else if(usrOption === TIJERA){

                if(pcOpcion === PIEDRA){
                    return PERDIO;
                }
                    else if(pcOpcion === PAPEL){
                        return GANO;
                    }
            }
        
}