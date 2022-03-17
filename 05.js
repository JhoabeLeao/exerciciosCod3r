function maiorOuIgual (primeiro, segundo) {
    if(typeof primeiro != typeof segundo) {
        return false
    } else {
        return primeiro >= segundo
    }    
}

console.log(maiorOuIgual(0, 0));
console.log(maiorOuIgual(0, "0"));
console.log(maiorOuIgual(5, 1));