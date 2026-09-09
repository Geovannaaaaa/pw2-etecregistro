// JavaScript

// Capturando os caompos
    const inputN1 = window.document.querySelector ('input#n1');
    const inputN2 = window.document.querySelector ('input#n2');
    const resultado = document.querySelector ("div#resultado");

// Funções Calculadora
// Soma
function  somar(){
    // Capturando os valores das inputs
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    // Somando os valores
    const soma = n1 + n2;
    // Exibindo o resultado
    resultado.innerHTML = `${soma}`;
}

// Subtração
function  subtrair(){
    // Capturando os valores das inputs
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    // Somando os valores
    const subtracao = n1 - n2;
    // Exibindo o resultado
    resultado.innerHTML = `${subtracao}`;
}

// Divisão
function  dividir(){
    // Capturando os valores das inputs
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    // Somando os valores
    const divisao = n1 / n2;
    // Exibindo o resultado
    resultado.innerHTML = `${divisao}`;
}

// Multiplicação
function  multiplicar(){
    // Capturando os valores das inputs
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    // Somando os valores
    const multiplicacao = n1 * n2;
    // Exibindo o resultado
    resultado.innerHTML = `${multiplicacao}`;
}

// Limpar os campos
function  limpar(){
    inputN1.value = "";
    inputN2.value = "";
    resultado.innerHTML = "";
}
