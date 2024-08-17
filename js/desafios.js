
// 1
function antecessor(n1){
    var n1 = parseInt((prompt('digite um número')));
    if (n1){
        alert('antecessor de ' + (n1) + ' é ' + (n1-1) + ' e seu sucessor é ' + (n1+1) )
    }
}

// 2
function dobro(n1){
    var n1 = parseFloat(prompt('digite um número'));
    if (n1){
    alert('dobro ' + n1*2 + ' triplo = ' + n1*3 + ' raiz quadrada ' + Math.sqrt(n1) )
    }
}

// 3
function nota(){
    var nota1 = parseInt((prompt('digite nota 1')))
    var nota2 = parseInt((prompt('digite nota 2')))
    if (nota1 && nota2 ){
        let media = parseFloat((nota1+nota2)/2 )
        alert('primeira nota = ' + nota1 + ' segunda = ' + nota2 + ', média =  '+ media)
    }
}

// 4
function metros_cm(){
    var metros =  parseFloat(prompt('digite metros'))
    if (metros){
    alert('metros = ' + metros + ' centimetros =' +  metros*100 + ' milímetros = ' +metros*1000)
    }
}

// 5 
function tabuada_funcao(){
    var tabuada = parseFloat(prompt('digite número da tabuada'))
    if (tabuada){
        console.log('tabuada do número ' + tabuada )
        for (var i = 1; i<=10; i++){
            alert(i + ' * ' + tabuada + ' = ' + i*tabuada)    
        }
    }
}

// 6
function real_dolar(real){
    var real  = (prompt('digite seu dinheiro'))
    if (real){
    alert('com esse dinheiro vc tem ' + real/5,47 + 'Dolares')
    }
}