const formulario = document.querySelector("#formulario");
const nombreInput = document.querySelector("#nombre");
const asuntoInput = document.querySelector("#asunto");
const mensajeInput = document.querySelector("#mensaje");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

  // Capturamos los valores ingresados por los usuarios
const { value: nombre } = nombreInput;
const { value: asunto } = asuntoInput;
const { value: mensaje } = mensajeInput;

const resultado = validarDatos(nombre, asunto, mensaje);

if (resultado) {
    limpiarErrores();
    exito();
}
});

function validarDatos(nombre, asunto, mensaje) {
    let datosValidados = true;
    let validacionDatos = /[a-zA-Z]/gim;

  // Validamos el nombre
if (validacionDatos.test(nombre) == false) {
    document.querySelector(".errorNombre").innerHTML =
        "Nombre es requerido";
    datosValidados = false;
} else {
    document.querySelector(".errorNombre").innerHTML =
        "Nombre ingresado correctamente";
    document.querySelector(".errorNombre").style.color = "green";
}

  // Validamos el asunto
if (validacionDatos.test(asunto) == false) {
    document.querySelector(".errorAsunto").innerHTML =
        "Asunto es requerido";
    datosValidados = false;
} else {
    document.querySelector(".errorAsunto").innerHTML =
        "Asunto ingresado correctamente";
    document.querySelector(".errorAsunto").style.color = "green";
}

  // Validamos el mensaje
if (validacionDatos.test(mensaje) == false) {
    document.querySelector(".errorMensaje").innerHTML =
        "Mensaje es requerido";
    datosValidados = false;
} else {
    document.querySelector(".errorMensaje").innerHTML =
        "Mensaje ingresado correctamente";
    document.querySelector(".errorMensaje").style.color = "green";
}

    return datosValidados;
}

function limpiarErrores() {
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}

function exito() {
    document.querySelector(".resultado").innerHTML =
    "Mensaje enviado exitosamente|";
}

const sum = (a, b) => {
    return a + b
}

console.log(sum(1,3));