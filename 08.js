function repetir (item, quantidade) {
    let resultado = []

    for (let i = 0; i < quantidade; i++)
        resultado.push(item)

    return resultado    
}

console.log(repetir("código", 2));
console.log(repetir(7, 3));