// 1
document.getElementById('carro').addEventListener('submit', function(event){
    event.preventDefault()
var velocidade = parseInt(document.getElementById('carro_velocidade').value)

if (velocidade > 80){
    document.getElementById('alerta_velocidade').innerHTML = `<p> Multa de R$ ${(velocidade - 80) * 7}</p>`
}
})

// 2
document.getElementById('viagem').addEventListener('submit', function(event){
    event.preventDefault()
    var distancia = parseInt(document.getElementById('distancia').value)
    let resultado = 0
    if (distancia<=200){
        resultado = distancia * 0.50
    }else{
        resultado = distancia * 0.45
    }
    document.getElementById('preco_viagem').innerHTML = `<p>O valor da passagem será de R$ ${resultado}</p>`
})

// 3

document.getElementById('casa').addEventListener('submit', function(event){
event.preventDefault()
var valor_casa = parseFloat(document.getElementById('valor_casa').value)
var salario = parseFloat(document.getElementById('salario').value)
var anos = parseInt(document.getElementById('anos').value)
var valor_prestacao = valor_casa/ (anos*12)
if (valor_prestacao>((salario*30)/100)){
    document.getElementById('resultado_emprestimo').innerHTML = `<p>Não pode comprar a casa</p>`
}else{
    document.getElementById('resultado_emprestimo').innerHTML = `<p>Pode comprar a casa</p>`

}
})
//4
document.getElementById('escola').addEventListener('submit', function(event){
    event.preventDefault()
var nota1 = parseFloat(document.getElementById('nota1').value)
var nota2 = parseFloat(document.getElementById('nota2').value)
var media = (nota1 + nota2) /2
if (nota1 <= 10 && nota2 <= 10){
if (media<5){
    document.getElementById('resultado_nota').innerHTML = `<p>REPROVADO</p>`
}else if(media >= 5 && media <= 6.9){
    document.getElementById('resultado_nota').innerHTML = `<p>RECUPERAÇÃO</p>`
}else{
    document.getElementById('resultado_nota').innerHTML = `<p>APROVADO</p>`
}
}
})