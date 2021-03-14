//Factorial de un numero
function factorial(num){
    if (num === 0){
        return 1
    }
    console.log("Usted ha ingresado " + num.toString() + ", le diré el factorial de ese numero:")
    let numAux = num
    while((numAux-1)>0){
        num = num * (numAux-1)
        --numAux
    }
    return num
}

//Funciones arrow
let contar = (desde=0, hasta=10) =>{
    while (desde <= hasta){
        console.log(desde)
        ++desde
    }
}

//Arreglos
let agregarProducto = lista =>{
    let index //No me deja definirla en el if ternario
    lista.length === 0 ? index = 0 : index = lista.length - 1
    lista[index] = retornarTipoVariableCorrecta(prompt("Ingrese un producto: "))
}

/* !isNaN(input) ? return parseInt(input) : return input */ // Tampoco me deja

let retornarTipoVariableCorrecta = input =>{
    if (!isNaN(input)){
        return parseInt(input)
    }else{
        return input
    }
}

//Me hice una especie de .push() ahi arriba
 
/* listaDeSuper = [] */

//Arreglos

function amigoExiste(){
    let arregloAmigos = ["Abeja", "Polilla", "Chico Trípodes", "Fer", "Chico Trípodes"]
    let amigo = prompt("Ingrese el nombre de un amigo: ")
    if (arregloAmigos.indexOf(amigo) == -1){
        alert ("Sería bueno tener un amigo que se llame " + amigo)
    }else{
        alert ("Tengo un amigo llamado " + amigo )
    }
}

//Simulacion del Array.join()

function join (arreglo){
    let str = ""
    arreglo.forEach(letra => {
        str=str.concat(letra)
    });
    return str
}

//Objetos

let nave = {
    tipoDeNave: "Espacial",
    país: "Argentina",
    cantidadDeTripulantes: 4,
    tripulantes: ["Polilla", "Abeja", "Julisin", "Fernando"],
    estado: "Usada",
    despegar: function (){
        console.log("🚀 ¡Todo listo para el despegue! 👍")
        console.log("Oh no … 😱 ¡algo se rompió!")
        alert("🔥 ¡BOOOOOOM! 🔥")
    } 
} 

//Ejercicio nivelatorio objetos

let autos = [
    {
        marca: "Citroen",
        modelo: "C3",
        año: 2013,
        dueño: "Juan",
        color:{
            capot: "gris",
            puertas: "negro"
        },
        dueñosAnteriores: [] // Lo compro 0KM
    },
    {
        marca: "Honda",
        modelo: "Fit",
        año: 2016,
        dueño: "Santiago",
        color:{
            capot: "rojo",
            puertas: "rojo"
        },
        dueñosAnteriores: ["Jorge", "Iván"]
    }
]

autos[0].dueño = "Santiago"
autos[0].color["capot"] = "negro"
autos[0].dueñosAnteriores.push("Juan")

//