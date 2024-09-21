
// desafio 1
while(genero != 'M' && genero != 'F'){
    var genero =  prompt('digite um genero valido, F ou M')
}
alert('genero valido')

// //desafio 2 
var aleatorio = Math.floor(Math.random() * 11);
var tentativas = 0
while(aleatorio != numero){
    var numero = parseInt(prompt('advinhe o numero'))
    if (numero != aleatorio){
        tentativas +=1
        alert('errou!')
    } 
}
alert('acertou! ' + tentativas + 'tentativas necessarias')

// //desafio 3
soma = 0
while(numero != 999 ){
    var numero = parseInt(prompt('digite um numero'))
    if(numero != 999){
        soma += numero
    }
}
alert('soma total igual a ' + soma)

//desafio 4
var media = 0
var soma = 0
var cont = 0
var menor = 0
var maior = 0
while(1==1){
    var numero = parseInt(prompt('digite o numero para soma e media'))
    soma += numero
    cont ++
    var continuar = prompt('digite s para continuar e n para parar e ver media')
    if (numero> maior){
        maior = numero
    }
    if(numero < menor || cont == 1){
        menor = numero
    }
    if (continuar == 'n'){
        break
    } 
}
media = soma/cont
alert('media = ' +  media + ' menor = ' + menor + ' maior = ' + maior)