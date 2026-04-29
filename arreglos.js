let EdadDerecho = [];
let EdadIzquierdo = [];

function agregarEdad(){
   let edad = parseInt(document.getElementById("edad").value);
   if(!isNaN(edad)){
   if(edad >= 1 && edad <= 18){
    EdadIzquierdo.push(edad)
   } else if(edad <= 100 && edad > 18){
    EdadDerecho.push(edad);
   }
   } else {
    alert("Por favor Ingrese un numero valido");
   }
   document.getElementById("edad").value = ""
   pintarArregloIzquierda()
   pintarArregloDerecha()
}

function limpiar(){

}

function eliminarIzquierdo(indice){
    EdadIzquierdo.splice(indice, 1);
    pintarArregloIzquierda();
}

function eliminarDerecho(indice){
    EdadDerecho.splice(indice, 1);
    pintarArregloDerecha();
}

function pintarArregloIzquierda(){
    let tbody= document.getElementById("tablaIzquierda");
    let contenidoTabla = "";
    let EdadRecuperada;

    for(let i = 0; i < EdadIzquierdo.length; i++ ){
        EdadRecuperada = EdadIzquierdo[i];
        contenidoTabla+= "<tr>";
        contenidoTabla+= "<td>"+ EdadRecuperada + "</td>";
        contenidoTabla+= "<td><button class='btn-eliminar' onclick='eliminarIzquierdo( "+i+" )'>Eliminar</button></td> <td><button class='btn-mover' onclick='moverHaciaDerecha( "+i+" )'>➜</button></td>";
        contenidoTabla+= "</tr>";
    }
    tbody.innerHTML=contenidoTabla
}

function pintarArregloDerecha(){
    let tbody= document.getElementById("tablaDerecha");
    let contenidoTabla = "";
    let EdadRecuperada;

    for(let i = 0; i < EdadDerecho.length; i++ ){
        EdadRecuperada = EdadDerecho[i];
        contenidoTabla+= "<tr>";
        contenidoTabla+= " <td><button class='btn-mover' onclick='moverHaciaIzquierda( "+i+" )'>⬅</button></td> <td>"+ EdadRecuperada + "</td>";
        contenidoTabla+= "<td><button class='btn-eliminar' onclick='eliminarDerecho( "+i+" )'>Eliminar</button></td>";
        contenidoTabla+= "</tr>";
    }
    tbody.innerHTML=contenidoTabla
}

function moverHaciaDerecha(indice){
    let edad = EdadIzquierdo[indice];
    EdadDerecho.push(edad);
    EdadIzquierdo.splice(indice, 1);
    pintarArregloIzquierda()
    pintarArregloDerecha()
}

function moverHaciaIzquierda(indice){
    let edad = EdadDerecho[indice];
    EdadIzquierdo.push(edad);
    EdadDerecho.splice(indice, 1);
    pintarArregloIzquierda()
    pintarArregloDerecha()
}

function moverTodoDerecha(indice){;
    EdadDerecho.push(...EdadIzquierdo);
    EdadIzquierdo = [];
    pintarArregloIzquierda()
    pintarArregloDerecha()
}

function moverTodoIzquierda(indice){
    EdadIzquierdo.push(...EdadDerecho);
    EdadDerecho = [];
    pintarArregloIzquierda()
    pintarArregloDerecha()
}
