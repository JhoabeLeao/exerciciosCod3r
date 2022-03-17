function receberPimeiroEUltimoElemento (elementos) {
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()

    return [primeiroElemento, ultimoElemento]
}

console.log(receberPimeiroEUltimoElemento([7, 14, "olá"]))
console.log(receberPimeiroEUltimoElemento([-100, "aplicativo", 16]))