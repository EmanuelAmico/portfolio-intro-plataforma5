//------------------------------------------------
/* Ejercicios de nivelacion Coding Challenge P5: */
//------------------------------------------------

//-------------------
/* 1. Loop de pares */
//-------------------

/*Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”. */

function loopDePares(numero){
    for (let i=0; i<100; i++){
        console.log(i)
        if ((i + numero)%2===0){
            console.log("El numero " + (i + numero) + " es par")
        }

    }
}

//---------------------------------
/* 2. Loop de impares con palabra */
//---------------------------------

/* Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
Ahora, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro. */

function loopDeImpares(numero, palabra){
    for (let i=0; i<100; i++){
        console.log(i)
        if ((i + numero)%2===1){
            console.log(palabra)
        }
    }
}

//---------------
/* 3. Sumatoria */
//---------------

/* Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

Ejemplo: 
sumattion(3) debe retornar 6 por que hace (1 +2 +3)
sumattion(8) debe retornar 36 */
    
let summation = numero =>{
    let acumulador = 0
    for (let i=numero; i>0; i--){
        acumulador += i
    }
    return acumulador
}

//-------------------
/* 4. Nuevo Arreglo */
//-------------------

/* Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

Ejemplo: 
nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10] */

function nuevoArreglo (numero){
    let arreglo = []
    for (let i=1; i<=numero; i++){
        arreglo.push(i)
    }
    return arreglo
}

//----------------------------
/* 5. Similar String.split() */
//----------------------------

/* Debés crear una función llamada `split` que reciba un `string` y simule el comportamiento de la función original Si no sabés cómo funciona, Google puede ayudarte..

Importante: No podés usar el String.split()

Ejemplo: 
split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”] */

function split(str){
    let arregloString = []
    let cantidadDeLetras = 0
    while (cantidadDeLetras !== str.length){
        arregloString.push(str[cantidadDeLetras])
        cantidadDeLetras++
    }
    return arregloString
}

//------------------------
/* 6. Carácter del medio */
//------------------------

/* Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.

Ejemplo: 
middleCharacter(“plataforma5”) debe retornar “f”
middleCharacter(“hola”) debe retornar “ol”
middleCharacter(“cosas”) debe retornar “s” */

function middleCharacter(str){
    if((str.length-1)%2 === 1){
        let i = Math.floor((str.length - 1)/2)
        return `${str[i]}${str[i+1]}`
    }else{
        return str[(str.length - 1)/2]
    }
}

//-----------------------------
/* 7. Mover ceros a lo último */
//-----------------------------

/* Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.

Ejemplo: 
moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0] */

function moveZeros(arreglo){
    let i=0
    while (i<arreglo.length){
        if(arreglo[i]===0){
            arreglo.push(parseInt(arreglo.splice(i, 1))) //Le tuve que poner parseInt porque el método slice() devuelve un arreglo []
        }
        i++
    }
    return arreglo
}

//----------------------------
/* 8. Manejando dos arreglos */
//----------------------------

/* Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”.

Ejemplo:
arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a */

function arrayHandler(arreglo1, arreglo2){
    if(arreglo1.length !== arreglo2.length){
        return "Error. Los arreglos no tienen la misma cantidad de elementos."
    }else{
        for(let i=0; i<arreglo1.length; i++){
            console.log(`Soy ${arreglo1[i]} y yo soy ${arreglo2[i]}`)
        }
    }
}

//--------------------------
/* 9. Mezclando arreglos I */
//--------------------------

/* Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.

Ejemplo: 
mezclarArreglos([1,2,3,4],[“h”,”o”,”l”,”a”]) debe retornar [1, “h”, 2,”o”, 3,”l”,4,”a”]
mezclarArreglos([1,2,3,4], [“h”,”p”]) debe retornar [1, “h”, 2, “p”, 3 , 4]
mezclarArreglos([“h”,”p”], [1,2,3,4]) debe retornar [“h”, 1, “p”, 2, 3 , 4] */

function mezclarArreglos(arreglo1, arreglo2){
    let nuevoArreglo = []
    if(arreglo1.length>arreglo2.length){
        for (let i=0; i<arreglo1.length; i++){
            nuevoArreglo.push(arreglo1[i])
            if(i<arreglo2.length){
                nuevoArreglo.push(arreglo2[i])
            }
        }
        return nuevoArreglo
    }else{
        for (let i=0; i<arreglo2.length; i++){
            if(i<arreglo1.length){
                nuevoArreglo.push(arreglo1[i])
            }
            nuevoArreglo.push(arreglo2[i])
        }
        return nuevoArreglo
    }
}

//NOTA: Este ejercicio ↑ me costó pensarlo.

//------------------
/* 10. Mínima Suma */
//------------------

/* Debés crear una función llamada `minSum` que reciba un arreglo de números desordenados  y devuelva la suma entre los dos números más chicos.

Ejemplo: 
minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
minSum([1, 10, 43, 900, 20, 8]) debe retornar 9 */

function minSum (arreglo){
    let minimo = 9e99
    let minimoAnterior = 9e99
    arreglo.forEach(numero => {
        if (numero<minimo){
            minimo = numero
        }
    });
    arreglo.forEach(numero => {
        if (numero>minimo && numero<minimoAnterior){
            minimoAnterior = numero
        }
    });
    return minimo + minimoAnterior
}

//NOTA: Este ejercicio ↑ me costo pensarlo. Seguramente se pueda hacer usando un solo bucle, intenté hacerlo con un solo "for" pero no pude. #Frustracion :(

//-------------------------
/* 11. Arreglo de objetos */
//-------------------------

/* Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` que contenga el valor del número y sus anteriores.

Ejemplo:
arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}] */

function arregloDeObjetos(numero){
    let arregloObjetos = []
    for (let i=0; i<numero; i++){
        arregloObjetos.push({valor: (i+1)})
    }
    return arregloObjetos
}

//-------------------------
/* 12. Arreglo de objetos */
//-------------------------

/* Debés crear una función llamada `arregloDeObjetos2` que reciba un número y una palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.

Ejemplo:
arregloDeObjetos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4}, {hola: 5 }]
arregloDeObjetos(3, “chau”) debe retornar [{chau: 1}, {chau: 2}, {chau: 3}] */

function arregloDeObjetos2(numero, palabra){
    let arregloObjetos = []
    for (let i=0; i<numero; i++){
        let objeto = {}
        objeto[palabra] = i+1
        arregloObjetos.push(objeto)
    }
    return arregloObjetos
}

//----------------------
/* 13. Única propiedad */
//----------------------

/* Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string. 

Ejemplo: 
 var  arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ]
oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ]
oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ] */

function oneProperty(arregloDeObj, str){
    let nuevoArreglo = []
    arregloDeObj.forEach(objeto => {
        let nuevoObjeto = {}
        nuevoObjeto[str] = objeto[str]
        nuevoArreglo.push(nuevoObjeto)
    });
    return nuevoArreglo
}

//-------------------------
/* 14. Guerra de palabras */
//-------------------------

/* Utils: 
var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}


Debés crear una función llamada `warWords` que reciba dos palabras como parámetro y devuelva la ganadora según la suma del valor de sus letras (dado por su posición en el abecedario).

Ejemplo:
warWord(“hola”, “chau”) debe retornar  “hola” (36 > 33)
warWord(“love”, “friendship”) debe retornar “friendship” */

function warWords(string1, string2){
    let abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
    let puntuacionstr1 = 0
    let puntuacionstr2 = 0
    for (let i=0; i<string1.length; i++){
        puntuacionstr1 += abc[string1[i]]
    }
    for (i=0; i<string2.length; i++){
        puntuacionstr2 += abc[string2[i]]
    }
    if(puntuacionstr1>puntuacionstr2){
        return string1
    }else{
        return string2
    }
}

//---------------------------
/* 15. Prefijos Telefónicos */
//---------------------------

/* 	Utils:
var prefijos = [54, 55, 56, 57, 58]
var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
Debés crear una función llamada `validarPrefijo` que reciba un número por parámetro. Deberá:

Generar un objeto desde dos arreglos dados. Deberá tener como propiedades, los números de prefijos, y como valor, el país correspondiente a cada prefijo.
ejemplo : 

{
	54: “Argentina”,
	55: ”Brasil”,
	56: ”Ecuador”,
	57: ”Bolivia”
}


Validar si los dos primeros números del pasado por parámetro existen en el objeto de prefijos telefónicos. En caso de ser correcto, deberá retornar “Este número pertenece a X”.
En caso de ser incorrecto deberá retornar “El número no pertenece a nuestros países”

Ejemplo: 
validarPrefijo(“5412345678”) debe retornar “Este número pertenece a Argentina”
validarPrefijo(“5712345678”) debe retornar “Este número pertenece a Bolivia”
validarPrefijo(“8012345678”) debe retornar “El número no pertenece a nuestros países” */

function validarPrefijo(numero){
    let prefijos = [54, 55, 56, 57, 58]
    let paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
    let prefijosPaisesObj = {}
    for (let i=0; i<5; i++){
        prefijosPaisesObj[prefijos[i]]=paises[i]
    }
    if (prefijosPaisesObj[parseInt(numero.toString().slice(0,2))]){
        return `Este numero pertenece a ${prefijosPaisesObj[parseInt(numero.toString().slice(0,2))]}`
    }else{
        return "El numero no pertenece a nuestros países"
    }
}

//------------------------------
/* 16. {value: key} kelue: vay */
//------------------------------

/* Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro. Si ese paŕametro no es un objeto, deberá devolver un string que indique qué tipo de dato fue ingresado como input y por qué no es válido.
Si el parámetro es un objeto, la función deberá devolver otro objeto. Deberá tener todas las propiedades que sean un string puestas como key y el value deberá ser el key anterior.

	Ejemplo:
reverseKeys(344) debería devolver “error, input can’t be a number”
reverseKeys([ ]) debería devolver “error, input can’t be an Array”
reverseKeys(‘hola’) debería devolver “error, input can’t be a string”

var prueba = {
	nombre: ‘santi’,
	edad: 22,
	nacionalidad: ‘de otro planeta’,
	documento: 44444444
}
reverseKeys(prueba) debería devolver:
{
santi: ‘nombre’, 
edad: 22,
‘’de otro planeta”: nacionalidad,
 documento: 44444444
}
 */

function reverseKeys(objeto){
    if (typeof(objeto)!=="object"){
        return `error, input can't be a ${typeof(objeto)}`
    }else if(Array.isArray(objeto)){
        return "error, input can't be an array"
    }else if(objeto === null){
        return "error, input can't be a null"
    }else{
        let nuevoObjeto = {}
        for(let propiedad in objeto){
            if (typeof(objeto[propiedad])==="string"){
                nuevoObjeto[objeto[propiedad]]=propiedad
            }else{
                nuevoObjeto[propiedad]=objeto[propiedad]
            }
        }
        return nuevoObjeto
    }
}

//-----------------
/* 17. Palindromo */
//-----------------

/* Deben crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no, debe retornar true en el caso que sea, y false en el caso que no.

Definición de palíndromo aquí.

Ejemplo: 

palindromo(“anilina”) debe retornar true
palindromo(“Ana”) debe retornar true
palindromo(“Enrique”) debe retornar false */

function palindromo(str){
    str = str.toLowerCase()
    let strInvertido = ""
    for (let i=0; i<str.length; i++){
        strInvertido = strInvertido.concat(str[str.length - (i+1)]) 
    }
    if(str===strInvertido){
        return true
    }else{
        return false
    }
}

//---------------------------------------
/* 18. Rotación de arreglo a la derecha */
//---------------------------------------

/* Debes crear una función llamada “rotar” que reciba un arreglo y un número, y debera retornar un nuevo arreglo con los elementos rotados la cantidad de veces como sea el número a la derecha.

Ejemplo: 
rotar([1, 2, 3, 4, 5], 2) debe retornar [4, 5, 1, 2, 3]
rotar([1, 2, 3, 4, 5], 3) debe retornar [3, 4, 5, 1, 2] */

function rotar(arreglo, desplazamientoDerecha){
    let nuevoArreglo = []
    if(desplazamientoDerecha>arreglo.length)
        desplazamientoDerecha = desplazamientoDerecha - Math.floor(desplazamientoDerecha/arreglo.length) * arreglo.length 
    //Hago que el nro de desplazamientos caiga en el intervalo = [ 0 , arreglo.length ] para evitar que se hagan push y shift de más innecesarios cuando pongo un nro de rotaciones muy grande.
    for (i=0; i<desplazamientoDerecha; i++){
        arreglo.unshift(arreglo.pop())
    }
    return arreglo
}

//NOTA: Este ejercicio ↑ es el que más me costó pensar de todos, porque lo primero que se me ocurrió fue jugar con los índices y perdí literalmente horas machacandome la cabeza tratando de resolverlo, hasta que me di cuenta que se podía resolver fácilmente con push() pop() shift() y unshift().

//-----------------------------
/* 19. Consecutivos similares */
//-----------------------------

/* Debes crear una función llamada “consecutivosSimilares” que reciba un string y retorne cuantos consecutivos similares hay en un string. 
Ejemplo: 
consecutivosSimilares(“AAAA”) debe retornar 3
consecutivosSimilares(“BBBBB”) debe retornar 4
consecutivosSimilares(“ABABABAB”) debe retornar 0
consecutivosSimilares(“BABABA”) debe retornar 0
consecutivosSimilares(“AAABBB”) debe retornar 4 */

function consecutivosSimilares(str){
    let acumulador = 0
    for (let i=0; i<str.length; i++){
        if(str[i]===str[i+1]){
            acumulador++
        }
    }
    return acumulador
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------//