function clonarArreglo(arr){
return [...arr]
}

function clonarObjeto(obj) {
    return { ...obj }
}

function sumar(...numeros) {
    return numeros.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0)
}

function saludar(nombre = 'Desconocido') {
    return `Hola ${nombre}`
}





//arreglo por si no sabe leer puto
const arregloOriginal = [1, 2, 3]
const arregloClonado = clonarArreglo(arregloOriginal)
console.log('Arreglo clonado:', arregloClonado)
// clonar obj
const objetoOriginal = { nombre: 'Juan', edad: 30 }
const objetoClonado = clonarObjeto(objetoOriginal)
console.log('Objeto clonado:', objetoClonado)

//smr 
console.log('Suma:', sumar(1, 2, 3))
console.log('Suma:', sumar(5, 10, 15, 20))

// sld
console.log(saludar())
console.log(saludar('Ana'))
