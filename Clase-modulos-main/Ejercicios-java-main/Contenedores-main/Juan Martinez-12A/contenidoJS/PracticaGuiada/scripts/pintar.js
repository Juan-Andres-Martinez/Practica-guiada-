'use strict';
const cardsEstudiantes = document.querySelector("#cardsEstudiantes")
const estudiantes =[];

const pintarCard = (tipo) =>{
    tipo = tipo.toUpperCase();
    const fragmento = document.createDocumentFragment();
    const templateEstudiante = document.querySelector("#templateEstudiante").content;
    if (tipo ==="ESTUDIANTE"){
        for (let i of estudiantes){
            
        }
    }
}

const agregarEstudiantes = (name, lastName,avg)=>{
    let persona = {
        nombre: name,
        apellido: lastName,
        promedio: avg
    };
    estudiantes.push(persona);
}

