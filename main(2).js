function menu (){
    let arrayObjetos = [];
    
    let opciones = "";
    do {
        opciones = prompt("-------------MENU-------------\n\n1. Lectura de datos\n2.Crear Objeto\n3.Mostrar Objeto\n4.Crear Array\n5.Mostrar Array\n6.Elimine primer elemento del Array\nElimine ultimo elemento del Array\n8.Eliminar cualquier elemento del Array\n9.Agregar elementoal comienzo del Array\n10.Agregar elemento al final del Array\n11.Crear Array de objetos\n12.Iterar array con objetos con FOR\n13.Iterar array con objetos con ForEach\n14.Iterar Array con objetos con Map y crear copia\n15.Proceso personal\n\n0. Salir");
    
        switch (opciones) {
            case "0":
                alert("Fin del menú")
                break;
            default:
                alert("inserte una opcion del 1 al 15")
                break;
           case "1":
                alert("Lectura de datos");
                leerDatos();
                break;
            case "2":
                alert("Crear Objeto");
                crearObjeto();
                break;
            case "3":
                alert("Mostrar Objeto");
                mostrarObjeto();
                break;
            case "4":
                alert("Crear Array");
                crearArray();
                break;
            case "5":
                alert("Mostrar Array");
                mostrarArray();
                break;
            case "6":
                alert("Elimine primer elemento del Array")
                EliminarPrimerElementoArray();
                break;
            case "7":
                alert("Elimine ultimo elemento del Array")
                eliminarUltimoEnArray();
                break;
            case "8":
                alert("Eliminar cualquier elemento del array");
                eliminarCualquierEnArray();
                break;
            case "9":
                alert("Agregar elemento al comienzo del array")
                agregarAlComienzoArray();
                break;
            case "10":
                alert("Agregar elemento al final del array");
                agregarAlfinalArray();
                break;
            case "11":
                alert("Crear array con objetos")
                arrayCrear();
                break;
            case "12":
                alert("Iterar array con objetos con FOR")
                iterarConFor();
                break;
            case "13":
                alert("Iterar array con objetos con ForEach");
                iterarConForeach();
                break;
            case "14":
                alert("Iterar array con objetos con Map y crear copia")
                iterarConMap();
                break;
            case "15":
                alert("proceso personal");
                procesoPersonal();
                break;
            
        }
        } while (opciones != "0");
      }
      
      menu();



function leerDatos() {
    let ciudad = prompt("Ingresa tu ciudad de recidencia");
    let barrio = prompt("Ingresa el barrio donde vives");
    alert(`Su ciudad es ${ciudad} y vive en el barrio ${barrio}`)
}

function crearObjeto() {
    let cuadrado = {
        ancho : prompt("Ingrese el ancho de su cuadrado"),
        largo : prompt("Ingrese el largo de su cuadro")
    };
    alert(`el perimeto de su cuadro es de:\n Ancho: ${cuadrado.ancho}\nLargo: ${cuadrado.largo}`);
}


function mostrarObjeto() {
    let cosas = {
        cosa1: prompt("Ingrese una cosa XD"),
        cosa2: prompt("Ingrese otra cosa"),
        cosa3: prompt("Ingrese otra cosa mas")
    };
    alert(`Las cosas que elegiste fueros: \n Cosa1: \n ${cosas.cosa1}\n Cosa2:\n${cosas.cosa2}\nCosa3: \n ${cosas.cosa3}`);
}

function crearArray(){
    let crear = [];
    let m = prompt("Cantidad de elementos");
    
    for(let i = 0; i < m; i++){
        crear.push(prompt(`Ingrese un objeto ${i+1} del array`));

    }
    alert(`sus objetos son: ${crear}`);
}

function mostrarArray() {
    let array = [];
    let p = prompt("Cantidad de elementos:");
    for(let i = 0; i < p; i++){
        array.push(prompt(`Ingrese el elemento ${i+1}del array`));
    }
    alert(`Los elementos son: ${array}`);
}

function EliminarPrimerElementoArray() {
    let array = [];
    let o = prompt("Cantidad de elementos que desea:");
    for(let i = 0; i < o; i++){
        array.push(prompt(`Elemento ${i+1} del array:`))
    }
    array.shift();
    alert(`El primer elemento se elimino y es: ${array} `);
} 

function eliminarUltimoEnArray () {
    let array = [];
    let u = prompt("Ingrese los objetos que desea");
    for (let i = 0; i < u; i++) {
        array.push(prompt(`Ingrese elemento ${i+1} del array:`));
    }
    array.pop();
    alert(`El ultimo elemento del array ha sido eleminado. lo que queda del array es: ${array} `);
}

function eliminarCualquierEnArray () {
    let array = [];
    let d = prompt("Cantidad de elementos");
    for (let i = 0; i < d; i++) {
        array.push(prompt(`Ingrese elemento ${i+1} del array:`)); 
    }
    let indicador = prompt(`numero del elemento que quiere borrar empieze (entre 0 y ${d-1}):`);
    array.splice(indicador,1);
    alert(array)

}

function agregarAlComienzoArray() {
    let array = [];
    let u = prompt("Ingrese los objetos que desea");
    for (let i = 0; i < u; i++) {
        array.push(prompt(`Ingrese elemento ${i+1} del array:`));
    }
    array.unshift();
    alert(`el elemento adisionado a sido ${array} al inicio de tu array`)
    alert(array)
}

function agregarAlfinalArray() {
    let array = [];
    let u = prompt("Ingrese los objetos que desea");
    for (let i = 0; i < u; i++) {
        array.push(prompt(`Ingrese elemento ${i+1} del array:`));
        
    }
    let elemento = prompt("Ingreso el elemento a agregar");
    array.push(elemento);
    alert(`el elemento ${elemento} a sido agregado al final del array`);
    alert(elemento);
}

function arrayCrear(){
    let arrayUnCrear = [];
    let cantidadObjeto = prompt("¿Cuántos objetos desea crear?");
    
    for (let i = 0; i < cantidadObjeto; i++) {   
      let nombre = prompt(`Ingrese el nombre del objeto ${i + 1}`);
      let altura = prompt(`Ingrese la altura del objeto ${i + 1}`);
      arrayUnCrear.push({nombre, altura}); 
    }
    
    let mensaje = `Se crearon ${cantidadObjeto} objetos:\n`;
    for (let i = 0; i < cantidadObjeto; i++) {
      mensaje += `- Nombre: ${arrayUnCrear[i].nombre}, Altura: ${arrayUnCrear[i].altura}\n`;
    }
    
    alert(mensaje);
  }

  function iterarConFor(){
    let iterarConFor = [];
    let cantidadObjeto = prompt("¿Cuántos objetos desea crear?");
    
    for (let i = 0; i < cantidadObjeto; i++) {   
      let nombre = prompt(`Ingrese el nombre del objeto ${i + 1}`);
      let altura = prompt(`Ingrese la altura del objeto ${i + 1}`);
      
      iterarConFor.push({nombre, altura}); 
    }
    let text = "Se iteró con for: \n";
    for(let i=0; i < iterarConFor.length; i++){
      text += `Nombre del objeto ${i + 1}: ${iterarConFor[i].nombre}, Altura del objeto ${i + 1}: ${iterarConFor[i].altura} \n`
    }
    
    alert(text); 
  }

  function iterarConForeach() {
    let arreglo = [];
    let cantidad = prompt("Cuanrtos objetos desea:");

    for (let i = 0; i < cantidad; i++) {
      let nombre = prompt(`Ingrese el nombre del objeto ${i+1}:`);
      let edad = prompt(`Ingrese la edad del objeto ${i+1}:`);
      arreglo.push({nombre, edad});
    }
  
    function mostrarDatos(elemento) {
      alert(`Nombre: ${elemento.nombre}\nEdad: ${elemento.edad}`);
    }
  
    arreglo.forEach(mostrarDatos);
  }

  function iterarConMap() {
    let arreglo = [];
    let cantidad = prompt("Ingrese la cantidad de objetos a crear:");

    for (let i = 0; i < cantidad; i++) {
      let nombre = prompt(`Ingrese el nombre del objeto ${i+1}:`);
      let edad = prompt(`Ingrese la edad del objeto ${i+1}:`);
      arreglo.push({nombre, edad});
    }
  
    function duplicarEdad(elemento) {
      return {nombre: elemento.nombre, edad: elemento.edad * 2};
    }
  
    let arregloDuplicado = arreglo.map(duplicarEdad);
  
    let mensaje = "Duplicado:\n";
    arregloDuplicado.forEach(function(elemento) {
      mensaje += `Nombre: ${elemento.nombre} - Edad: ${elemento.edad}\n`;
    });
  
    alert(mensaje);
  }

  function procesoPersonal(){
    let datos = prompt("Cuantos datos quiere crear:");
    let cantidad = [];
    for(let i = 0; i < datos; i++){
        let elemento = prompt(`Ingresa el elemento ${i+1}:`)
        cantidad.push(elemento);
    }
    let respuesta = "";
    
    cantidad.forEach((elemento,indice) => {
        respuesta += `${indice+1}. ${elemento}`
    });
    alert(respuesta);
  }
  
   

  
  
 

    
    
  



