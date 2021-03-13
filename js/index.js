//Factorial de un numero

function factorial(){
    let num = parseInt(prompt ("Ingrese un numero entero positivo: "))
    while(!num || num<0){
        num = parseInt(prompt ("Usted no ha ingresado un numero entero positivo, intente nuevamente: "))
    }
    console.log("Usted ha ingresado " + num.toString() + ", le diré el factorial de ese numero:")
    let numAux = num
    while((numAux-1)>0){
        num = num * (numAux-1)
        --numAux
    }
    console.log(num)
}

//------------------------------------------------------------------------------------------------------//