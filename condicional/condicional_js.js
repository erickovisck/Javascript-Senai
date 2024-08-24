function verificar_idade(){
    let idade = parseInt(document.getElementById('idade').value)
    if (idade <18){
        alert("menor de idade")
    }else{
        alert("maior de idade")
    }
}