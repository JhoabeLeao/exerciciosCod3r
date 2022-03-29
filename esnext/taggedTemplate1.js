// tagged templates - processa o template dentro de uma funcção

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

// não vai usar quase nunca