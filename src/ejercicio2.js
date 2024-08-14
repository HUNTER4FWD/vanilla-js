class Contador {
  constructor() {
    this.valor = 0
  }

  siguiente() {
    this.valor += 1
  }
}


let instancia = new Contador()


console.log(instancia.valor)
instancia.siguiente()
console.log(instancia.valor)
instancia.siguiente()
console.log(instancia.valor)
instancia.siguiente()
console.log(instancia.valor)
