
let contador = {
  valor: 0,
  
  siguiente: function() {
    this.valor += 1 
    return this.valor
  }
}

console.log(contador.siguiente())
console.log(contador.siguiente())
console.log(contador.siguiente())