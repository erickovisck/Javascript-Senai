
// desafio 1
// let maior = 0
// let menor = 0
// let lista = []
// for (let i = 0; i<5; i++){
//     let num = parseFloat(prompt('digite um numero'))
//     if (num>maior){
//         maior = num
//     }
//     if (num<menor || i == 0){
//         menor = num
//     }
//     lista.push(num)
// }
// alert('Maior numero foi ' + maior + ' que esta na posição ' + lista.indexOf(maior) + ' menor numero foi ' + menor + ' que esta na posição '+ lista.indexOf(menor))

// desafio 2

// let lista = []
// while (true){
//     let num = parseFloat(prompt('digite um numero, digite 0 para encerrar'))
//     lista.push(num)
//     if (num == 0){
//         break
//     }
// }
// alert('foram digitados ' + lista.length + ' numeros')
// alert('lista de forma decrescente ' + lista.sort((a,b)=> b - a))
// if (5 in lista){
//     alert('numero 5 foi digitado')
// }else{
//     alert('numero 5 nao foi digitado')
    
// }

// desafio 3
let lista = []
let par = []
let impar = []
while (true){
    let num = parseFloat(prompt('digite um numero, digite 0 para encerrar'))
    lista.push(num)
    if(num%2 == 0){
        par.push(num)
    }else{
        impar.push(num)
    }
    if (num == 0){
        break
    }
}
alert('lista completa '+ lista)
alert('lista pares '+ par)
alert('lista impares '+ impar)
