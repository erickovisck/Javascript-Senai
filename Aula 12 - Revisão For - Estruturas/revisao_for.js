//46
for (let i = 10; i>=0; i--){
    setTimeout( function(){
    document.getElementById('contagem').innerHTML = i
}, (10-i)*1000);
}

// 50
let num = 0
let soma = 0
for (let i = 1; i<7;i++){
    num = parseInt(prompt('digite um numero'))
    if (num%2 == 0){
        soma += num
    }
}
alert('soma dos numeros pares é '+ soma)