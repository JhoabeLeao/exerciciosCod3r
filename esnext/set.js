const times = new Set()

times.add('Vasco')
times.add('Botafogo').add('Gremio')
times.add('Flamengo')
times.add('Atlético')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))