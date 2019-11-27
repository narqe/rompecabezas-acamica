// Arreglo que contiene las intrucciones del juego 
var instrucciones = ['1) Mové las piezas al espacio libre (ficha roja) y acomodá la imagen',
'2) Utilizá las teclas (← →) para mover las piezas al espacio libre (ficha roja) hacia la derecha y la izquierda', 
'3) Utiliza las teclas (↑ ↓) para mover las piezas al espacio libre (ficha roja) hacia arriba y abajo'];
// Arreglo para ir guardando los movimientos que se vayan realizando
var movimientos = [];

// Representación de la grilla. Cada número representa a una pieza.
// El 9 es la posición vacía
var grilla = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

/* Estas dos variables son para guardar la posición de la pieza vacía. 
Esta posición comienza siendo la [2, 2]*/
var filaVacia = 2;
var columnaVacia = 2;

/* Esta función deberá recorrer el arreglo de instrucciones pasado por parámetro. 
Cada elemento de este arreglo deberá ser mostrado en la lista con id 'lista-instrucciones'. 
Para eso deberás usar la función ya implementada mostrarInstruccionEnLista().
Podés ver su implementación en la ultima parte de este codigo. */
function mostrarInstrucciones(instrucciones) {
    for(var i = 0; i < instrucciones.length; i++){
      mostrarInstruccionEnLista(instrucciones[i], 'lista-instrucciones')
    }   
}

/* Función que intercambia dos posiciones en la grilla.
Pensar como intercambiar dos posiciones en un arreglo de arreglos. 
Para que tengas en cuenta:
Si queremos intercambiar las posiciones [1,2] con la [0, 0], si hacemos: 
arreglo[1][2] = arreglo[0][0];
arreglo[0][0] = arreglo[1][2];

En vez de intercambiar esos valores vamos a terminar teniendo en ambas posiciones el mismo valor.
Se te ocurre cómo solucionar esto con una variable temporal?
*/


function intercambiarPosicionesGrilla(filaPos1, columnaPos1, filaPos2, columnaPos2) {
  var variableTemporal = grilla[filaPos1][columnaPos1];
  for(var f = 0; f < grilla.length; f++){
    for(var c = 0; c < grilla.length; c++){  
      grilla[filaPos1][columnaPos1] = grilla[filaPos2][columnaPos2];
    }
  }
  grilla[filaPos2][columnaPos2] = variableTemporal;
  return grilla;
}

// Actualiza la posición de la pieza vacía
function actualizarPosicionVacia(nuevaFila, nuevaColumna) {
  filaVacia = nuevaFila;
  columnaVacia = nuevaColumna;
}


// Para chequear si la posicón está dentro de la grilla.
function posicionValida(fila, columna) {
    if (fila >= 3 || fila < 0){
      return false;
    } else  if (columna >= 3 || columna < 0){
      return false;
    } else {
      return true;
    }
}

/* Movimiento de fichas, en este caso la que se mueve es la blanca intercambiando su posición con otro elemento.
Las direcciones están dadas por números que representa: arriba (38), abajo (40), izquierda (37), derecha (39) */
function moverEnDireccion(direccion) {
  var nuevaFilaPiezaVacia;
  var nuevaColumnaPiezaVacia;

  // Mueve pieza hacia la abajo, reemplazandola con la blanca
  if (direccion === codigosDireccion.ABAJO) {
    nuevaFilaPiezaVacia = filaVacia - 1;
    nuevaColumnaPiezaVacia = columnaVacia;
  }
    
  // Mueve pieza hacia arriba, reemplazandola con la blanca
  else if (direccion === codigosDireccion.ARRIBA) {
    nuevaFilaPiezaVacia = filaVacia + 1;
    nuevaColumnaPiezaVacia = columnaVacia;
  }
    
  // Mueve pieza hacia la derecha, reemplazandola con la blanca
  else if (direccion === codigosDireccion.DERECHA) {
    nuevaFilaPiezaVacia = filaVacia;
    nuevaColumnaPiezaVacia = columnaVacia - 1;
  }
    
  // Mueve pieza hacia la izquierda, reemplazandola con la blanca
  else if (direccion === codigosDireccion.IZQUIERDA) {
    nuevaFilaPiezaVacia = filaVacia;
    nuevaColumnaPiezaVacia = columnaVacia + 1;
  }

  /* A continuación se chequea si la nueva posición es válida, si lo es, se intercambia. 
  Para que esta parte del código funcione correctamente deberás haber implementado 
  las funciones posicionValida, intercambiarPosicionesGrilla y actualizarPosicionVacia */

    if (posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)) {
        intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        //COMPLETAR: Agregar la dirección del movimiento al arreglo de movimientos
        movimientos.push(direccion);
        cantMovimientos = document.getElementById('movi');
        cantMovimientos.textContent = movimientos.length;
    }
}


//////////////////////////////////////////////////////////
////////A CONTINUACIÓN FUNCIONES YA IMPLEMENTADAS.////////
/////////NO TOCAR A MENOS QUE SEPAS LO QUE HACES//////////
//////////////////////////////////////////////////////////

/* Las funciones y variables que se encuentran a continuación ya están implementadas.
No hace falta que entiendas exactamente que es lo que hacen, ya que contienen
temas aún no vistos. De todas formas, cada una de ellas tiene un comentario
para que sepas que se está haciendo a grandes rasgos. NO LAS MODIFIQUES a menos que
entiendas perfectamente lo que estás haciendo! */

/* codigosDireccion es un objeto que te permite reemplazar
el uso de números confusos en tu código. Para referirte a la dir
izquierda, en vez de usar el número 37, ahora podés usar:
codigosDireccion.IZQUIERDA. Esto facilita mucho la lectura del código. */
var codigosDireccion = {
    IZQUIERDA: 37,
    ARRIBA: 38,
    DERECHA: 39,
    ABAJO: 40
}

/* Funcion que realiza el intercambio logico (en la grilla) y ademas actualiza
el intercambio en la pantalla (DOM). Para que funcione debera estar implementada
la funcion intercambiarPosicionesGrilla() */
function intercambiarPosiciones(fila1, columna1, fila2, columna2) {
  // Intercambio posiciones en la grilla
  var pieza1 = grilla[fila1][columna1];
  var pieza2 = grilla[fila2][columna2];

  intercambiarPosicionesGrilla(fila1, columna1, fila2, columna2);
  intercambiarPosicionesDOM('pieza' + pieza1, 'pieza' + pieza2);

}

/* Intercambio de posiciones de los elementos del DOM que representan
las fichas en la pantalla */

function intercambiarPosicionesDOM(idPieza1, idPieza2) {
  // Intercambio posiciones en el DOM
  var elementoPieza1 = document.getElementById(idPieza1);
  var elementoPieza2 = document.getElementById(idPieza2);

  var padre = elementoPieza1.parentNode;

  var clonElemento1 = elementoPieza1.cloneNode(true);
  var clonElemento2 = elementoPieza2.cloneNode(true);

  padre.replaceChild(clonElemento1, elementoPieza2);
  padre.replaceChild(clonElemento2, elementoPieza1);
}

/* Actualiza la representación visual del último movimiento 
en la pantalla, representado con una flecha. */
function actualizarUltimoMovimiento(direccion) {
  ultimoMov = document.getElementById('flecha');
  switch (direccion) {
    case codigosDireccion.ARRIBA:
      ultimoMov.textContent = '↑ Arriba';
      break;
    case codigosDireccion.ABAJO:
      ultimoMov.textContent = '↓ Abajo';
      break;
    case codigosDireccion.DERECHA:
      ultimoMov.textContent = '→ Derecha';
      break;
    case codigosDireccion.IZQUIERDA:
      ultimoMov.textContent = '← Izquierda';
      break;
  }
}

/* Esta función permite agregar una instrucción a la lista
con idLista. Se crea un elemento li dinámicamente con el texto 
pasado con el parámetro "instrucción". */
function mostrarInstruccionEnLista(instruccion, idLista) {
  var ul = document.getElementById(idLista);
  var li = document.createElement("li");
  li.textContent = instruccion;
  ul.appendChild(li);
}

/* Función que mezcla las piezas del tablero una cantidad de veces dada.
Se calcula una posición aleatoria y se mueve en esa dirección. De esta forma
se mezclará todo el tablero. */

function mezclarPiezas(veces) {
  if (veces <= 0) {
    return;
  }
  
  var direcciones = [codigosDireccion.ABAJO, codigosDireccion.ARRIBA,
      codigosDireccion.DERECHA, codigosDireccion.IZQUIERDA
    ];

  var direccion = direcciones[Math.floor(Math.random() * direcciones.length)];
  moverEnDireccion(direccion);

  setTimeout(function() {
      mezclarPiezas(veces - 1);
    }, 100);
}

/* Esta función va a chequear si el Rompecabezas esta en la posicion ganadora. 
Existen diferentes formas de hacer este chequeo a partir de la grilla. */
function chequearSiGano() {
  if(grilla[0][0] === 1 && 
     grilla[0][1] === 2 && 
     grilla[0][2] === 3 && 
     grilla[1][0] === 4 && 
     grilla[1][1] === 5 && 
     grilla[1][2] === 6 && 
     grilla[2][0] === 7 && 
     grilla[2][1] === 8 && 
     grilla[2][2] === 9) { 
    mostrarCartelGanador();
  } 
}

// Implementar alguna forma de mostrar un cartel que avise que ganaste el juego
function mostrarCartelGanador() {
    alert('¡Ganaste! \n Lograste completar el juego en ' + movimientos.length + ' movimientos');
    mezclarPiezas(30);
    cambiarJuego();
}

/* capturarTeclas: Esta función captura las teclas presionadas por el usuario. Javascript
permite detectar eventos, por ejemplo, cuando una tecla es presionada y en 
base a eso hacer algo. No es necesario que entiendas como funciona esto ahora, 
en el futuro ya lo vas a aprender. Por ahora, sólo hay que entender que cuando
se toca una tecla se hace algo en respuesta, en este caso, un movimiento */
function capturarTeclas() {
  document.body.onkeydown = (function(evento) {
    if (evento.which === codigosDireccion.ABAJO ||
      evento.which === codigosDireccion.ARRIBA ||
      evento.which === codigosDireccion.DERECHA ||
      evento.which === codigosDireccion.IZQUIERDA) {
        
      //movimientos.push(evento.which);
      moverEnDireccion(evento.which);
      actualizarUltimoMovimiento(evento.which);

        var gano = chequearSiGano();
        if (gano) {
          setTimeout(function() {
              mostrarCartelGanador();
              }, 500);
            }
            evento.preventDefault();
        }
    })
}

var whatGame = 1;

function cambiarJuego(){
  imgFinal = document.getElementById('objetivoFinal');
  juego = document.getElementById('cambiarJuego');
  img1 = document.getElementById('imagen1');
  img2 = document.getElementById('imagen2');
  img3 = document.getElementById('imagen3');
  img4 = document.getElementById('imagen4');
  img5 = document.getElementById('imagen5');
  img6 = document.getElementById('imagen6');
  img7 = document.getElementById('imagen7');
  img8 = document.getElementById('imagen8');
  movimientos = [];
  if(whatGame === 1) {
    img1.src = 'images/1.jpg';
    img2.src = 'images/2.jpg';
    img3.src = 'images/3.jpg';
    img4.src = 'images/4.jpg';
    img5.src = 'images/5.jpg';
    img6.src = 'images/6.jpg';
    img7.src = 'images/7.jpg';
    img8.src = 'images/8.jpg';
    imgFinal.src = 'images/final-pikachu.jpg';
    whatGame = 2;
  } else if(whatGame === 2) {
    img1.src = 'images/10.jpg';
    img2.src = 'images/20.jpg';
    img3.src = 'images/30.jpg';
    img4.src = 'images/40.jpg';
    img5.src = 'images/50.jpg';
    img6.src = 'images/60.jpg';
    img7.src = 'images/70.jpg';
    img8.src = 'images/80.jpg';
    imgFinal.src = 'images/final.png';
    whatGame = 1;
  }
}

/* Se inicia el rompecabezas mezclando las piezas 60 veces 
y ejecutando la función para que se capturen las teclas que 
presiona el usuario */
function iniciar() {
    mostrarInstrucciones(instrucciones);
    mezclarPiezas(30);
    capturarTeclas();
}

// Ejecutamos la función iniciar
iniciar();
