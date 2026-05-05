console.log("Hola!");
const inputNombre = document.querySelector("#Nom")
const input = document.querySelector("#contra");
const btn = document.querySelector("#btn");
const resultado = document.querySelector("#respuesta")

function mostrarContraseña() {
    if (input.value === "") {
        resultado.innerHTML = "No has escrito nada";
    } else {
        resultado.innerHTML = "Hola, " + inputNombre.value + " tu contraseña és " + input.value;
    }
}

btn.addEventListener("click", mostrarContraseña)
// mostrar contraseña y nombre del input en el div