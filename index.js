let nombre = "Luis";
let apellido = "Franco";

let objeto = {nombre: "Luis ", apellido:"Franco"};

sessionStorage.setItem("Objeto", JSON.stringify(objeto))
localStorage.setItem("Objeto", JSON.stringify(objeto))

document.cookie = "nombreCaducidad=objeto;Expires=" + new Date(2023, 1, 24).toUTCString()