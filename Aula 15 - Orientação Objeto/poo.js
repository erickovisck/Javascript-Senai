class personagem{
    nome 
    forca
    vida
    stamina
    nivel
}
class jogar{

}


function teste(){
    // alert('teste')
    let personagem1 = new personagem()
    personagem1.nome = "Rafael"
    personagem1.forca = 8
    personagem1.vida = 10
    personagem1.stamina = 6
    personagem1.nivel = 7
    
    let personagem2 = new personagem()
    personagem2.nome = "Silvio"
    personagem2.forca = 8
    personagem2.vida = 10
    personagem2.stamina = 5
    personagem2.nivel = 8
    
    alert(personagem1.nome + ' Força =  '+  personagem1.forca)
    alert(personagem2.nome + ' Força =  '+  personagem2.forca)
}