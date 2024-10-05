// var numeros = [10,20,30,40,50]
// alert(numeros)
// for (let i=0; i< numeros.length; i++){
//     alert(numeros[i])
// }

let nomes = ['Silvio', 'Eduardo', 'Erick', 'Wesley']
let nomes_restantes = ['Felipe', 'Igor', 'Rafael', 'Marcos']
for (let i = 0; i<nomes_restantes.lenght;i++){
    let j = i+4
    nomes[j] = nomes_restantes[i]
    alert(nomes)
}
alert(nomes_restantes)
alert(nomes)