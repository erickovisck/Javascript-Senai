function verificar_idade(){
    let idade = parseInt(document.getElementById('idade').value)
    if (idade <18){
        document.getElementById("resultado").innerHTML = "<p>menor de idade</p>"
    }else{
        document.getElementById("resultado").innerHTML = "<p>maior de idade</p>"
    }
}
