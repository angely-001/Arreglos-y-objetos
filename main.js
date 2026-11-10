
function SaludarAprendices() {

    let aprendices = ['Cedeño', 'Rojas', 'Tinoco', 'Juan Jose',
        'Julian', 'Andres', 'Juan Diego',
        'Yen Manuelis', 'Maria Paula', 'Montoya',
        'Triviño', 'Erick', 'Erika', 'Daniel',
        'Juanfer', 'Richard', 'Guillen',
        'Juan Hoyos', 'Leandro'];

    let inmuebles = [];

    // Mostrar el aprendiz ubicado en la posición 2
    console.log("Aprendiz en la posición 2:");
    console.log(aprendices[2]);

    // Mostrar la cantidad de elementos del arreglo
    console.log("Cantidad de aprendices:");
    console.log(aprendices.length);

    // Modificar un aprendiz
    aprendices[3] = "Angely";

    console.log("Cantidad después de modificar:");
    console.log(aprendices.length);

    // Agregar un nuevo aprendiz
    aprendices.push("Sofia");

    console.log("Lista actualizada de aprendices:");
    console.log(aprendices.length);

}

// Lista estudiantes

function ListaEstudiantes() {

    // Crear un arreglo con 5 estudiantes
    let estudiantes = [
        'Julian', 'Evelyn', 'Mariana',
        'Juan Jose', 'Andres'
    ];

    console.log("Lista de estudiantes");
    console.log(estudiantes);

    console.log("Primer estudiante");
    console.log(estudiantes[0]);

    console.log("Tercer estudiante");
    console.log(estudiantes[2]);

    console.log("Ultimo estudiante");
    console.log(estudiantes[estudiantes.length - 1]);

    console.log("Cantidad de estudiantes");
    console.log(estudiantes.length);

    console.log("Estudiantes y sus posiciones:");

    for (let i = 0; i < estudiantes.length; i++) {

        console.log("Posición " + i + ": " + estudiantes[i]);

    }

    // Ingresar un nuevo estudiante
    let nuevoEstudiante = prompt("Ingrese el nombre del nuevo estudiante:");

    if (nuevoEstudiante !== null && nuevoEstudiante.trim() !== "") {

        estudiantes.push(nuevoEstudiante);

    }

    console.log("Nueva cantidad de estudiantes:");
    console.log(estudiantes.length);

    // Buscar un estudiante
    let buscar = prompt("Ingrese el nombre del estudiante que desea buscar:");

    if (buscar !== null && estudiantes.includes(buscar)) {

        console.log(buscar + " sí se encuentra registrado.");

    } else {

        console.log(buscar + " no se encuentra registrado.");

    }

    console.log("Lista actualizada de estudiantes:");
    console.log(estudiantes);

}

// Administracion productos

function AdministrarProductos() {

    let productos = ['Arroz', 'Leche', 'Pan', 'Huevos', 'Azúcar'];

    console.log("Productos registrados:");
    console.log(productos);

    // Modificar el segundo producto
    productos[1] = 'Queso';

    console.log("Segundo producto modificado:");
    console.log(productos);

    // Agregar productos
    productos.push('Aceite');
    productos.unshift('Café');

    console.log("Arreglo actualizado:");
    console.log(productos);

    // Buscar un producto
    let buscar = prompt("Ingrese el producto que desea buscar:");

    let posicion = productos.indexOf(buscar);

    if (posicion !== -1) {

        console.log("El producto sí está registrado.");
        console.log("Posición del producto: " + (posicion + 1));

    } else {

        console.log("El producto no está registrado.");

    }

    // Modificar un producto por posición
    let posicionModificar = Number(
        prompt("Ingrese la posición del producto que desea modificar:")
    );

    if (posicionModificar >= 1 && posicionModificar <= productos.length) {

        let nuevoNombre = prompt("Ingrese el nuevo nombre del producto:");

        if (nuevoNombre !== null && nuevoNombre.trim() !== "") {

            productos[posicionModificar - 1] = nuevoNombre;

            console.log("Producto modificado correctamente.");

        }

    } else {

        console.log("Posición no válida.");

    }

    // Eliminar el último producto
    productos.pop();

    console.log("Cantidad de productos:");
    console.log(productos.length);

    console.log("Listado final:");
    console.log(productos);

}

// Eliminacion de elementos

function EliminarElementos() {

    // Crear un arreglo con seis ciudades de Colombia
    let ciudades = [
        'Bogotá', 'Medellín', 'Cali',
        'Cartagena', 'Barranquilla', 'Bucaramanga'
    ];

    // Eliminar la última ciudad
    ciudades.pop();

    console.log("Después de eliminar la última ciudad:");
    console.log(ciudades);

    // Eliminar la primera ciudad
    ciudades.shift();

    console.log("Después de eliminar la primera ciudad:");
    console.log(ciudades);

    // Eliminar una ciudad desde la posición 3
    ciudades.splice(3, 1);

    console.log("Resultado final:");
    console.log(ciudades);

    // Agregar nuevas ciudades
    ciudades.push('Pereira');
    ciudades.push('Manizales');

    console.log("Cantidad de ciudades:");
    console.log(ciudades.length);

    console.log("Listado de ciudades:");

    for (let i = 0; i < ciudades.length; i++) {

        console.log("Posición " + (i + 1) + ": " + ciudades[i]);

    }

    // Buscar una ciudad
    let buscar = prompt("Ingrese el nombre de una ciudad:");

    if (buscar !== null && ciudades.includes(buscar)) {

        console.log("La ciudad " + buscar + " sí se encuentra registrada.");

    } else {

        console.log("La ciudad " + buscar + " no se encuentra registrada.");

    }

}

// Busqueda de estudiantes

function BusquedaEstudiante() {  
     
    // crear un arreglo con ocho nombres de estudiantes
    let nombres = ['Angely', 'Juan Jose', 'Evelyn', 'Mariana', 'Julian', 'Andres', 'Camilo', 'Samuel'];

    // solicitar al usuario el nombre de un estudiante
    let nombre = prompt("Ingrese el nombre de un estudiante");
    
    // verificar si existe 
    if (nombres.includes(nombre)) {
        console.log("El estudiante existe");
    } else {
        console.log("El estudiante no existe");
    }

    // obtener su posición
    let posición = nombres.indexOf(nombres);
    console.log("Posición: " + posición);

    // mostrar un mensaje si fue encontrado o no
    if (nombre.includes(nombre)){
        console.log("El estudiante fue encontrado");
    } else {
        console.log("El estudiante no fue encontrado");
    }


    // si existe, mostrar la posición en la que se encuentra
    let Posición = nombre.indexOf(nombre);
    if (Posición !== -1){
        console.log("El estudiante se encuentra en la posición: " + Posición);
    } else {
        console.log("El estudiante no existe");
    }

    // solicitar un segundo nombre
    let segundoNombre = prompt("Ingrese el segundo nombre");
    if (segundoNombre.includes(nombre)){
        console.log("El estudiante esta registrado");
    } else {
        console.log("El estudiante no esta registrado");
    }

    // contar cuantos estudiantes tienen un nombre que comienza por una letra determinada
    let letra = prompt("Ingrese la letra");
    let contador = 0;
    for (let estudiante of estudiantes){
        if (estudiante.toLowerCase().startsWitch(letra.toLowerCase())) {
            contador++;
        }
    }
    console.log("Cantidad de estudiantes: " + contador);

    // mostrar todos los nombres utilizando un recorrido con for
    for (let i = 0; i < nombres.length; i++){
        console.log(estudiantes[i]);

    }

    // permitir agregar un estudiante nuevo si no esta registrado
    let nuevo = prompt("Ingrese nuevo estudiante");
    if (!nuevo.includes(nuevo)){
        nuevo.push(nuevo);
        console.log("Estudiante agregado correctamente");
    } else {
        console.log("El estudiante ya esta registrado");
    }

    // mostrar el listado actualizado y la cantidad total de estudiantes
    console.log("Listado actualizado:");
    for (let i = 0; i < estudiantes.length; i++){
        console.log(estudiantes[i]);
    }
    console.log("Total de estudiantes: " + estudiantes.length);

}

// Analisis de numeros

function AnalisisNumeros(){
// Crear un arreglo con diez numeros enteros
let numeros = [12, -5, 8, 0, 15, -3, 20, 7, 4, -10];

console.log("Arreglo original:", numeros);

// Variables
let suma = 0;
let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;
let ceros = 0;

// Recorrer y mostrar todos los numeros
console.log("Todos los numeros:");

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);

// Calcular la suma
    suma += numeros[i];

// Contar pares e impares
    if (numeros[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }

// Contar positivos, negativos y ceros
    if (numeros[i] > 0) {
        positivos++;
    } else if (numeros[i] < 0) {
        negativos++;
    } else {
        ceros++;
    }
}

// Calcular el promedio
let promedio = suma / numeros.length;

// Mostrar suma y promedio
console.log("La suma es:", suma);
console.log("El promedio es:", promedio);

// Mostrar pares e impares
console.log("Numeros pares:", pares);
console.log("Numeros impares:", impares);

// Identificar el numero mayor y menor
let mayor = numeros[0];
let menor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }

    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log("Numero mayor:", mayor);
console.log("Numero menor:", menor);

// 7. Mostrar positivos, negativos y ceros
console.log("Numeros positivos:", positivos);
console.log("Numeros negativos:", negativos);
console.log("Cantidad de ceros:", ceros);

// Mostrar numeros mayores que el promedio
console.log("Numeros mayores que el promedio:");

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > promedio) {
        console.log(numeros[i]);
    }
}

// Buscar un numero en el arreglo
let buscar = parseInt(prompt("Ingrese un numero para buscar:"));

if (numeros.includes(buscar)) {
    console.log("El numero SI se encuentra en el arreglo");
} else {
    console.log("El numero NO se encuentra en el arreglo");
}

// Mostrar los numeros en orden inverso
let inverso = [...numeros];
inverso.reverse();

console.log("Orden inverso:", inverso);

// Ordenar de menor a mayor
let ordenados = [...numeros];

ordenados.sort(function(a, b) {
    return a - b;
});

console.log("Numeros ordenados de menor a mayor:", ordenados);

// Mostrar el arreglo original y los resultados
console.log("---------- RESULTADOS FINALES ----------");

console.log("Arreglo original:", numeros);
console.log("Suma:", suma);
console.log("Promedio:", promedio);
console.log("Pares:", pares);
console.log("Impares:", impares);
console.log("Mayor:", mayor);
console.log("Menor:", menor);
console.log("Positivos:", positivos);
console.log("Negativos:", negativos);
console.log("Ceros:", ceros);
console.log("Orden inverso:", inverso);
console.log("Arreglo ordenado:", ordenados);
}


// SmartSalud

function smartsalud() {

    let especialidades = [
        "Pediatría",
        "Cardiología",
        "Dermatología",
        "Neurología",
        "Oftalmología",
        "Traumatología",
        "Ginecología",
        "Medicina general"
    ];

    // Mostrar especialidades registradas
    console.log("Especialidades registradas:");
    console.log(especialidades);

    // Consultar por índice
    console.log("Primera especialidad:", especialidades[0]);
    console.log("Cuarta especialidad:", especialidades[3]);

    // Cantidad de elementos
    console.log("Cantidad:", especialidades.length);

    // Recorrer el arreglo
    for (let i = 0; i < especialidades.length; i++) {
        console.log("Posición " + (i + 1) + ": " + especialidades[i]);
    }

    // Agregar especialidades
    especialidades.unshift("Endocrinología"); // Al inicio
    especialidades.push("Psiquiatría");       // Al final
    console.log("Después de agregar:", especialidades);

    // Modificar por posición (índice 2 = tercera especialidad)
    especialidades[2] = "Alergología";
    console.log("Después de modificar:", especialidades);

    // Eliminar especialidades
    especialidades.pop();        // Elimina la última
    especialidades.shift();      // Elimina la primera
    especialidades.splice(1, 1); // Elimina la del índice 1
    console.log("Después de eliminar:", especialidades);

    // Buscar una especialidad
    let buscada = "Neurología";

    if (especialidades.includes(buscada)) {
        let posicion = especialidades.indexOf(buscada);
        console.log(buscada + " está registrada en la posición " + (posicion + 1) + ".");
    } else {
        console.log(buscada + " no está registrada.");
    }

    // Orden alfabético en español, sin modificar el original
    let ordenadas = [...especialidades].sort((a, b) => a.localeCompare(b, "es"));
    console.log("Especialidades ordenadas:", ordenadas);

    // Contar especialidades que contienen una letra
    let letra = "o";
    let cantidadConLetra = 0;

    for (let i = 0; i < especialidades.length; i++) {
        if (especialidades[i].toLowerCase().includes(letra)) {
            cantidadConLetra++;
        }
    }

    console.log("Especialidades que contienen la letra '" + letra + "':", cantidadConLetra);
    console.log("Cantidad final:", especialidades.length);
}

// Registro de un estudiante
function RegistroEstudiante (){
    
    const estudiante = {
        nombre: "Angely",
        apellido: "Gonzalez",
        edad: 17,
        programaf: "Adso",
        numerof: 3593362,
        correo: "angely-s1626@gmail.com"
    }
   
    console.log(estudiante);

    // consultar nombre y apellido}
    console.log(estudiante.nombre);
    console.log(estudiante.apellido);

    // consultar programa de formacion
    console.log(estudiante["programaf"]);

    // modificar la edad
    estudiante.edad = 18;
    console.log(estudiante.edad);

    // agregar una propiedad llamada ciudad
    estudiante.ciudad = "Bogotá";
    console.log(estudiante);

    // eliminar la propiedad correo
    delete estudiante.correo;
    console.log(estudiante);

    // recorrer las propiedades
    for (let propiedad in estudiante) {
        console.log(propiedad + ":" + estudiante [propiedad]);
    }

    // objeto actualizado
    console.log(estudiante);

}

function GestionarPersona(){
    const persona = {
        nombre: "Angely",
        edad: 17,
        Genero: "femenino",
        saludar: function (){
            console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años ")
        }
    }
    persona.saludar();
}

// Gestionar producto
function GestionarProducto(){
    const producto = {
        nombre: "Tedado",
        precio: 320000,
        cantidad: 26,
        mostrarInfo: function(){
            console.log("Producto: " + this.nombre);
            console.log("Precio: " + this.precio);
            console.log("Disponibles: " + this.cantidad);
            console.log("Valor total inventario: " + this.precio * this.cantidad);
            
        }
    }
    producto.mostrarInfo(); 
}

// Gestionar Empleado
function GestionarEmpleado(){
    const empleado = {
        nombre: "Camilo",
        cargo: "Instructor",
        salarioMensual: 8000000,
        diasTrabajados: 20,
        porcentajeDescuento: 4,
        calcularSalario: function(){
            let salarioDias = this.salarioMensual/30;
            let salario = salarioDias*this.diasTrabajados;
            
            return parseInt(salario); 
        
        },
        calcularDescuento: function(){
            let descuento = (this.calcularSalario() * this.porcentajeDescuento)/100;
            return parseInt(descuento);
        },
        calcularTotalaPagar: function(){
            let total = this.calcularSalario() - this.calcularDescuento();
            console.log("El total a pagar sin descuento es de: " + this.calcularSalario());
            console.log("El total del descuento es de: " + this.calcularDescuento());
            console.log("El total neto es pagar (con descuento): " + total);
        }
    }
    empleado.calcularTotalaPagar();
}

// Gestionar Empleado 2
function calcularSalario(){
    let empleado = {

        nombre: parseInt(prompt("Ingrese el nombre del emepleado")),
        cargo: prompt("Ingrese el cargo: "),
        salarioMensual: parseInt(prompt("Ingrese el salario mensual")),
        diasTrabajados: parseInt(prompt("Ingrese dias trabajados")),
        porcentajeDescuento: 4,
        calcularSalario: function(){
            let salarioDias = this.salarioMensual/30;
            let salario = salarioDias*this.diasTrabajados;
            
            return parseInt(salario); 
        
        },
        calcularDescuento: function(){
            let descuento = (this.calcularSalario() * this.porcentajeDescuento)/100;
            return parseInt(descuento);
        },
        calcularTotalaPagar: function(){
            let total = this.calcularSalario() - this.calcularDescuento();
            console.log("El total a pagar sin descuento es de: " + this.calcularSalario());
            console.log("El total del descuento es de: " + this.calcularDescuento());
            console.log("El total neto es pagar (con descuento): " + total);
        }
    }
    empleado.calcularTotalaPagar();
}



// Registro de un producto 
// SaludarAprendices();

// ListaEstudiantes();

// AdministrarProductos();

// EliminarElementos();

// BusquedaEstudiantes();  

// SmartSalud();

// InventarioProductos();

// RegistroEstudiante();