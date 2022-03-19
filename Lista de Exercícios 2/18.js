function contarCaractere(caractereBuscando, frase) {
    let contador = 0

    for (let i = 0; i < frase.length; i++)
        if(frase.charAt(i) === caractereBuscando)
            contador++

    return contador        
}

console.log(contarCaractere("r", "A sorte favorece os audazes"));
console.log(contarCaractere("c", "Conhece-te a ti mesmo"));