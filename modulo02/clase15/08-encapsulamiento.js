// Propiedades privadas con #

class Cuenta {
    #saldo = 0
    depositar(monto) { this.#saldo += monto }
    verSaldo() { return this.#saldo }
}

let nuevaCuenta = new Cuenta()
console.log(nuevaCuenta.saldo)
console.log(nuevaCuenta.verSaldo())
nuevaCuenta.depositar(2000)
console.log(nuevaCuenta.verSaldo())