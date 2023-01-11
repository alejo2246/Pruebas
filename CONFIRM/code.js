const contenedor = document.querySelector(".respuesta");

contenedor.classList.add("green");
contenedor.innerHTML = "hola";
if( 1===1){
  contenedor.classList.add("red");
  contenedor.innerHTML = "error";
}

