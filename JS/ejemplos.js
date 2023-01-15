let pc = {
  marca: "intel",
  procesador: "Intel core I5",
};

function saludar(nombre) {
  document.write(`¡Hola ${nombre}! ¿Como estas? <br>`);
}
const saludar2 = function (nombre) {
  document.write(`¡Hola ${nombre}! ¿Como estas? <br>`);
};
const saludar3 = (nombre) => {
  document.write(`¡Hola ${nombre}! ¿Como estas? <br>`);
};

saludar("pedro");
saludar2("camilo");
saludar3("camilo");

//POO

class Animal {
  constructor(especie, edad, color) {
    //constructor
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.info = `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`;
  }
  verInfo() {
    //metodo
    document.write(this.info);
  }
}

//HERENCIA
class Perro extends Animal {
  constructor(especie, edad, color, raza) {
    //HEREDA PROPIEDADES DEL PADRE
    super(especie, edad, color);
    this.raza = raza;
  }
  static ladrar() {
    //NO SE NECESITA QUE SE INSTANCE EL OBJETO
    alert("!Woof¡");
  }
  set setRaza(newName) {
    this.raza = newName;
  }
  get getRaza() {
    return this.raza;
  }
}

const perro = new Perro("canino", 10, "negro", "Chandoso");
perro.raza = "doberman";
document.write(perro.raza + "<br>");

/*Transformadores
pop() - elimina el último elemento de un array y lo devuelve.
shift( - elimina el primer elemento de un array y lo devuelve.
push() - agrega un elemento al array al final de la lista.
reverse() - invierte el orden de los elementos de un array.
unshift() - agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
sort() - ordena los elementos de unarreglo (array) localmente y devuelve el arreglo ordenado.
splice() - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

Accesores
- join() - une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve.
- slice() - devuelve una

De repeticion
-filter() Crea un nuevo array con todos los elementos que cumplan
-forEach() ejecuta funcion una vez por cada elemneto
-map()
*/

//METODOS DE SELECICON DE ELEMENTOS
// let obtener = document.getElementById("contenido");

// document.write(obtener.textContent);

// parrafo = document.getElementsByTagName("p"); //coleccion de elementos se accede mediante indices
// parrafo = document.querySelector(".parrafo");
// parrafo = document.querySelectorAll(".parrafo"); //trae un NodeList

//DEFINIR, OBTENER Y MODIFICAR ATRIBUTO

// const rangoEtario = document.querySelector(".rangoEtario");

// rangoEtario.setAttribute("type", "text");
// atributoObtenido = rangoEtario.getAttribute("type");
// rangoEtario.removeAttribute("placeholder");

//atributos globales

const titulo = document.querySelector(".titulo");

titulo.setAttribute("contentEditable", "false");
titulo.setAttribute("dir", "ltr"); //LTR rtl
//titulo.setAttribute("hidden","false")
titulo.setAttribute("tabindex", "0");
titulo.setAttribute("title", "madre");

//ATRIBUTOS INPUT

const input = document.querySelector(".name");
input.type = "TEXT";
input.minLength = "4";
input.accept = "image/PNG";
input.required = " ";

titulo.style.backgroundColor = "#eee";
titulo.style.borderRadius = "9999px";

//Clases, classList y Metodos de classList

titulo.classList.add("grande");
titulo.classList.remove("grande");
titulo.classList.toggle("grande");

//obtencion y modificacion de elementos

alert(titulo.textContent);
alert(titulo.innerHTML);
alert(titulo.outerHTML);

const contenedor = document.querySelector(".contenedor");

const fragmento = document.createDocumentFragment(); //agregar muchos elementos
for (let i = 0; i < 20; i++) {
  const item = document.createElement("LI");
  item.innerHTML = "item de la lista";
  fragmento.appendChild(item);
}

contenedor.appendChild(fragmento);

const hijos = contenedor.children;

for (hijo of hijos) {
  console.log(hijo);
}

const parrafo = (document.createElement("P").innerHTML = "Parrafo");
const h2_nuevo = document.createElement("H2");
const h2_antiguo = document.querySelector(".h2");
h2_nuevo.innerHTML = "Titulo";
contenedor.replaceChild(h2_nuevo, h2_antiguo);

//EVENTOS

//HTML onclick="alert('saludar')"
contenedor.onclick = ()=>{
  alert("hola");
}

contenedor.addEventListener("click",(e)=>{
  e.target; //objeto que desencadeno el evento
  e.preventDefault();
  e.stopPropagation(); //detener la propagación 
  saludar("pedro");
});//,true para darle especifidad

function saludar(a){
  alert(a);
}

//mouse events
/*
*click - ocurre con un click
*dblclick - ocurre con un doble click
*mouseover - ocurre cuando el puntero se mueve sobre un elemento O sobre uno de sus hijos.
*mouseout-ocurre cuando se mueve el puntero fuera de un elemento O de sus elementos secundarios.
      otros
 *contextmenu - ocurre con un click en el boton derecho en un elemento para abrir un menú contextual.
*mouseenter - ocurre cuando el puntero se mueve sobre un elemento.
 *mouseleave - ocurre cuando el puntero se mueve fuera de un elemento.
 *mouseup - ocurre cuando un usuario suelta un botón del mouse sobre un elemento
*mousemove - ocurre cuando el puntero se mueve mientras está sobre un elemento.
X) Eventos del Teclado
      *keydown - ocurre cuando una tecla se deja de presionar
      *keypress - ocurre cuando una tecla se presiona y suelta en un elemento
      *onkeyup - ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente
 X) Eventos de la interfaz
      *error - acurre cuando sucede un errar durante la carga de un archivo multimedia.
      *load - ocurre cuando un objeto se ha cargado
      *beforeunload - ocurre antes de que el documento esté a punto de descargarse
      *unload - ocurre unb vez que se ha descargado una página
       *resize - ocurre cuando se cambia el tamaño de la vista del documento
      *scroll - ocurre cuando se desplaza la barra de desplazamiento de un elemento
      *select - ocurre después de que el usuario selecciona algiin texto de <input> o <textarea>
Timers()
setTimeout()
setInterval()
clearTimeout()
clearInterval()

 

*/
try {
  
} catch (error  ) {
  
}