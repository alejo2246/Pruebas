let cuadroJugador1 = [];
let cuadroJugador2 = [];
let enemigo1 = [];
let enemigo2 = [];
let turnoA = 0;
let turnoB = 0;

let matrizAux = [];
const tamañoBarco = [
  {
    id: 5,
    type: "🚢",
  },
  {
    id: 4,
    type: "⛴️",
  },
  {
    id: 3,
    type: "⛵",
  },
  {
    id: 2,
    type: "🚤",
  },
  {
    id: 1,
    type: "🛶",
  },
];

const positionArray = ["horizontal", "vertical"];
let cantidadBarco = [1, 1, 2, 3, 3];
let randomBarco = {};
let ganadorState = true;
const tipoBarco = ["🚢", "🛶", "⛵", "🚤", "⛴️"];
function crearCuadro(matriz) {
  for (let i = 0; i < 10; i++) {
    let fila = [];
    for (let j = 0; j < 10; j++) {
      fila.push("");
    }
    matriz.push(fila);
  }
  return matriz;
}

//Generar posición random de barcos
function selectPositionRandom() {
  for (let i = 0; i < cantidadBarco.length; i++) {
    while (cantidadBarco[i] > 0) {
      random(i);
      cantidadBarco[i] -= 1;
    }
  }
}
//Verificación de posición válida
function checkPosition(pos, axis, size) {
  if (randomBarco.position === pos) {
    if (axis + (size - 1) < 10) {
      return true;
    } else {
      return false;
    }
  }
}
//Función para crear barco random
function random(i, type) {
  randomBarco.position =
    positionArray[Math.floor(Math.random() * Math.floor(positionArray.length))];
  randomBarco.x = Math.floor(Math.random() * Math.floor(10));
  randomBarco.y = Math.floor(Math.random() * Math.floor(10));
  if (checkPosition("horizontal", randomBarco.y, tamañoBarco[i].id)) {
    for (let j = randomBarco.y; j < randomBarco.y + tamañoBarco[i].id; j++) {
      if (matrizAux[randomBarco.x][j] !== "") {
        return random(i);
      }
    }
    for (let j = randomBarco.y; j < randomBarco.y + tamañoBarco[i].id; j++) {
      matrizAux[randomBarco.x][j] = tamañoBarco[i].type;
    }
  } else if (checkPosition("vertical", randomBarco.x, tamañoBarco[i].id)) {
    for (let j = randomBarco.x; j < randomBarco.x + tamañoBarco[i].id; j++) {
      if (matrizAux[j][randomBarco.y] !== "") {
        return random(i);
      }
    }
    for (let j = randomBarco.x; j < randomBarco.x + tamañoBarco[i].id; j++) {
      matrizAux[j][randomBarco.y] = tamañoBarco[i].type;
    }
  } else {
    return random(i);
  }
}
function destruccionTotal(cuadro, type) {}
function shot(cuadro, jugador, turno) {
  let x = Math.floor(Math.random() * Math.floor(10));
  let y = Math.floor(Math.random() * Math.floor(10));
  if (tipoBarco.includes(cuadro[x][y])) {
    console.log(`Disparo #${turno + 1} hacia fila(${x}) columna(${y}) : 🔥`);
    cuadro[x][y] = "🔥";
    if (jugador == "A") {
      enemigo1[x][y] = "🔥";
      turnoA += 1;
      ganadorState = checkGanador(cuadro, jugador);
      if (!ganadorState) {
        return cuadro;
      }
      return shot(cuadro, jugador, turnoA);
    } else {
      enemigo2[x][y] = "🔥";
      turnoB += 1;
      ganadorState = checkGanador(cuadro, jugador);
      if (!ganadorState) {
        return cuadro;
      }
      return shot(cuadro, jugador, turnoB);
    }
  } else if (cuadro[x][y] === "🔥" || cuadro[x][y] === "💧") {
    return shot(cuadro, jugador, turno);
  } else {
    console.log(`Disparo #${turno + 1} hacia fila(${x}) columna(${y}) : 💧`);
    cuadro[x][y] = "💧";
    if (jugador == "A") {
      enemigo1[x][y] = "💧";
    } else {
      enemigo2[x][y] = "💧";
    }
  }
  return cuadro;
}
//prueba
function checkGanador(matriz, jugador) {
  for (let i = 0; i < 10; i++) {
    let arraychecked = matriz[i].filter(
      (item) =>
        item === "🚢" ||
        item === "🛶" ||
        item === "⛵" ||
        item === "🚤" ||
        item == "⛴️"
    );
    if (arraychecked.length > 0) {
      return true;
    }
  }
  if (jugador === "A") {
    console.log(`El ganador es.....
============================
========= Jugador A ========
============================`);
    return false;
  } else {
    console.log(`El ganador es.....\n
============================\n
========= Jugador B ========\n
============================\n`);
    return false;
  }
}
matrizAux = crearCuadro(matrizAux);
selectPositionRandom();
cuadroJugador1 = matrizAux;

matrizAux = [];
cantidadBarco = [1, 1, 2, 3, 3];

matrizAux = crearCuadro(matrizAux);
selectPositionRandom();
cuadroJugador2 = matrizAux;
console.log(`========================================================\n
=====================HUNDE LA FLOTA=====================\n
========================================================\n
Desripción:\n
🛶 -> Barco de 1 posición\n
🚤 -> Barco de 2 posiciones\n
⛵ -> Barco de 3 posiciones\n
⛴️ -> Barco de 4 posiciones\n
🚢 -> Barco de 5 posiciones\n
🔥  -> Disparo acertado!\n
💧  -> Disparo al agua!\n
💥 -> Barco Hundido!\n
' '-> Posición vacia\n\n
JUGADOR 1`);
const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
console.table(cuadroJugador1);
console.log("JUGADOR 2");
console.table(cuadroJugador2);

console.log(`========================================================\n
=================El JUEGO HA COMENZADO!=================\n
========================================================`);
enemigo1 = crearCuadro(enemigo1);
enemigo2 = crearCuadro(enemigo2);

// while (ganadorState) {
//   console.log(`\nRonda ${turnoA} para el jugador A
// ========================================================`);
//   cuadroJugador2 = shot(cuadroJugador2, "A", turnoA);
//   console.log("Mi cuadro:");
//   console.table(cuadroJugador1);
//   console.log("Cuadro enemigo:");
//   console.table(enemigo1);
//   if (!ganadorState) {
//     break;
//   }

//   console.log(`\nRonda ${turnoB} para el jugador B
// ========================================================`);
//   cuadroJugador1 = shot(cuadroJugador1, "B", turnoB);
//   console.log("Mi cuadro:");
//   console.table(cuadroJugador2);
//   console.log("Cuadro enemigo:");
//   console.table(enemigo2);

//   turnoA += 1;
//   turnoB += 1;
// }

console.log(`Ronda terminada....
Tableros finales:

Jugador A:`);
console.table(cuadroJugador1);
console.log("Jugador B:");
console.table(cuadroJugador2);
