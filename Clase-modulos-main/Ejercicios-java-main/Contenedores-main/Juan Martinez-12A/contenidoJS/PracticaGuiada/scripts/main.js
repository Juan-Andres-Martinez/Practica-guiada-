'use strict';
import { validatedString, validatedAverage} from "./validated.js";

const btnAgregar = document.querySelector("#btn");
const btnMostrar = document.querySelector("#btnMostrar");

//Genereal eventos por propiedad y .addEventListener
btnAgregar.addEventListener("click", () =>{
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const promedio = document.querySelector("#promedio").value;
    const opcion = document.querySelector("#opcion").value;

    if (validatedString(nombre) && validatedString(apellido) && opcion != "0"){
        if (!isNaN(parseFloat(promedio)) && (validatedAverage(promedio))){
            agregarEstudiante(nombre, apellido, promedio);
        }else {
            console.log("error promedio");
        }
    }else{
        console.log("error datos");
    }
});