/* Desde el archivo /public/js/index.js, capturar los siguientes elementos: <main>, <h2>, <a> y <p>, ubicados en el archivo: /views//index.ejs */
const main = document.querySelector("main");
const h2 = document.querySelector("h2");
const a = document.querySelector("a");
const p = document.querySelectorAll("p");

/* Haciendo uso del prompt, indicar al usuario que: “Ingrese su nombre”. */
let userName = prompt("Ingrese su nombre:");

/* En caso de que el usuario no coloque su nombre, a la etiqueta <h2>, se le debe
agregar la palabra “Invitado”. En caso contrario, se le debe agregar el nombre que el
usuario ingresó. */
if(userName === "" || userName === null) {
    h2.innerText += "Invitado"
} else {
    h2.innerText += userName
};

/* Agregar a la etiqueta <h2> el estilo uppercase. */
h2.style.textTransform = "uppercase";

/* A la etiqueta <a>, colocarle el estilo correspondiente para que asuma el siguiente 
color: #E51B3E */

a.style.color = "#E51B3E";

/*  Mediante el confirm, preguntar al usuario “¿Desea colocar un fondo de
pantalla?”. Si la respuesta es afirmativa por parte del usuario, agregar al <body> la
clase “fondo”.
 */

let fondo = confirm("¿Desea colocar un fondo de pantalla?");
if(fondo) {
    document.querySelector("body").classList.add("fondo")
};

/* A todos los párrafos que fueron capturados, asignar a los pares la clase:
“descatadoPar”. Y a los impares agregar la clase: “destacadoImpar”. */

p.forEach((p, index) => {
    if(index % 2 === 0){
        p.classList.add("descatadoPar");
    }else{
        p.classList.add("destacadoImpar");
    }
});

/* Finalmente, establecer como visible a la etiqueta <main> en el browser o
navegador, aplicando el estilo: display : block. */

main.style.display = "block";



