let EdadDerecho = [];
let EdadIzquierdo = [];

function agregarEdad(){
   let edad = parseInt(document.getElementById("edad").value);
   if(!isNaN(edad)){
        EdadIzquierdo.push(edad);
   } else {
    alert("Por favor Ingrese un numero valido");
   }
   pintarArregloIzquierda()
}

function eliminarIzquierdo(indice){
    EdadIzquierdo.splice(indice, 1);
    pintarArregloIzquierda();
}

function pintarArregloIzquierda(){
    let tbody= document.getElementById("tablaIzquierda");
    let contenidoTabla = "";
    let EdadRecuperada;

    for(let i = 0; i < EdadIzquierdo.length; i++ ){
        EdadRecuperada = EdadIzquierdo[i];
        contenidoTabla+= "<tr>";
        contenidoTabla+= "<td>"+ EdadRecuperada + "</td>";
        contenidoTabla+= "<td><button class='btn-eliminar' onclick='eliminarIzquierdo( "+i+" )'>Eliminar</button></td> <td><button class='btn-mover'>➜</button></td>";
        contenidoTabla+= "</tr>";
    }
    tbody.innerHTML=contenidoTabla
}
