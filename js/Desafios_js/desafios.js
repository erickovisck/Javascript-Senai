
// 1
document.getElementById('desafio1').addEventListener('submit', function (event) {

    const numero = parseInt(document.getElementById('numero').value);
    if (isNaN(numero)) {
        document.getElementById('resultado').innerHTML = '<p style="color:red;">Por favor, digite um número válido.</p>';
    } else {
        const antecessor = numero - 1;
        const sucessor = numero + 1;
        document.getElementById('resultado').innerHTML = `<p>O antecessor de ${numero} é ${antecessor} e o sucessor é ${sucessor}.</p>`;
    }
});

// 2
document.getElementById('desafio2').addEventListener('submit', function (event) {

    let numero = parseInt(document.getElementById('numero2').value);
    if (isNaN(numero)) {
        document.getElementById('resultado').innerHTML = '<p style="color:red;">Por favor, digite um número válido.</p>';
    } else {
        let dobro = numero * 2 ;
        let triplo = numero * 3;
        let raiz = Math.sqrt(numero)
        document.getElementById('resultado2').innerHTML = `<p>O dobro de ${numero} é ${dobro} e o triplo  é ${triplo} e a raiz é ${raiz}.</p>`;
    }
});

// 3
function nota(){
    var nota1 = parseInt((prompt('digite nota 1')))
    var nota2 = parseInt((prompt('digite nota 2')))
    if (nota1 && nota2 ){
        let media = parseFloat((nota1+nota2)/2 )
        alert('primeira nota = ' + nota1 + ' segunda = ' + nota2 + ', média =  '+ media)
    }
}
document.getElementById('desafio3').addEventListener('submit', function (event) {

    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    
        let media = (nota1 + nota2)/2 ;
        document.getElementById('resultado3').innerHTML = `<p>Primeira nota = ${nota1} segunda = ${nota2} sua média é ${media}.</p>`;
    
});


// 4


document.getElementById("desafio4").addEventListener('submit', function(event){
    let metros = parseInt(document.getElementById('metros').value)
    document.getElementById('resultado4').innerHTML = `<p> metros = ${metros} centimetros = ${metros*100} milímetros = ${metros*1000}</p>`
})


// 5 

document.getElementById("desafio5").addEventListener('submit', function(event){
    document.getElementById('resultado5').innerHTML= ''
    var tabuada =  parseFloat(document.getElementById('tabuada').value)
        for (var i = 1; i<=10; i++){
            document.getElementById('resultado5').innerHTML += `<p>${tabuada} * ${i} = ${tabuada*i}</p><br>`  
        }
})


// 6
document.getElementById("desafio6").addEventListener('submit', function(event){
    document.getElementById('resultado6').innerHTML = ''
    var real =  parseFloat(document.getElementById('real').value)
    if (real){
        document.getElementById('resultado6').innerHTML += `<p>com esse dinheiro vc tem ${real/5} Dólares</p>`  
    }
})



 