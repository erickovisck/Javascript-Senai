
function Calcular(){
    // alert('Zzz')
    let valor = 0
    let produtos_escolhidos =[]
    let lista_produtos = {
        'pizza_portuguesa':50,
        'pizza_mussarela':45,
        'fanta_laranja':5
    }
    
    if(document.getElementById('pizza_portuguesa').value != ''){
        valor += 50 * Number(document.getElementById('pizza_portuguesa').value)
        produtos_escolhidos.push("Pizza Portuguesa")
    }

    if(document.getElementById('pizza_mussarela').value != ''){
        valor += 45 * Number(document.getElementById('pizza_mussarela').value)
        produtos_escolhidos.push("Pizza Mussarela")
    }

    if(document.getElementById('fanta_laranja').value != ''){
        valor += 5 * Number(document.getElementById('fanta_laranja').value)
        produtos_escolhidos.push("Fanta Laranja")
    }
    document.getElementById('total').innerHTML = `O valor do pedido é ${valor}
    <br> Os produtos escolhidos foram: ', ${produtos_escolhidos}`
    console.log(document.getElementsByTagName('h3').value)
}