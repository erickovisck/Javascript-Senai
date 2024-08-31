function verificar_idade(){
    let idade = parseInt(document.getElementById('idade').value)
    if (idade <18){
        document.getElementById("resultado").innerHTML = "<p>menor de idade</p>"
    }else{
        document.getElementById("resultado").innerHTML = "<p>maior de idade</p>"
    }
}
function placar(){
    let gols1 = parseInt(document.getElementById('time_1').value)
    let gols2 = parseInt(document.getElementById('time_2').value)
    if(gols1 > gols2){
        alert('vitoria time 1')
    }else if (gols2 > gols1){
        alert('vitoria do time 2')
    }else{
        alert('empate')
    }
}
function ver_nota(){
    let nota = parseInt(document.getElementById('nota_final').value)
    if (nota>=6){
        alert('passou')
    }else if (nota>=4 && nota <=5){
        alert('recuperação')
    }else{
        alert('reprovou')
    }
}
function validar_cpf(){
    let cpf = parseInt(document.getElementById('cpf').value)
    let cpf_lista = Array.from(cpf)
    let primeiro_digito = (cpf_lista[0]*10 + cpf_lista[1]*9 + cpf_lista[2]*8 +cpf_lista[3]*7 +cpf_lista[4]*6 +cpf_lista[5]*5 +cpf_lista[6]*4 +cpf_lista[7]*3 +cpf_lista[8]*2) * 10 / 11
    console.log(primeiro_digito)
    let segundo_digito = cpf_lista[0]*10 + cpf_lista[1]*9 + cpf_lista[2]*8 +cpf_lista[3]*7 +cpf_lista[4]*6 +cpf_lista[5]*5 +cpf_lista[6]*4 +cpf_lista[7]*3 +cpf_lista[8]*2

}