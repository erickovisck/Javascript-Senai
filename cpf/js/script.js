function verificarCPF() {
    let cpf = document.getElementById("cpf").value;
    let resultado = document.getElementById("resultado");

    cpf = cpf.replace(/[^\d]+/g, '');

    if (validarCPF(cpf)) {
        resultado.textContent = "O CPF é válido.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "O CPF é inválido.";
        resultado.style.color = "red";
    }
}

function validarCPF(cpf) {
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false; 
    }

    let soma = 0, resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}
