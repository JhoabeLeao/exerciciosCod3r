function cumprimentar (nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
}

console.log(cumprimentar("Leonardo"));
console.log(cumprimentar("Maria"));