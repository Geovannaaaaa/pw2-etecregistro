// Capturando o elemnto da DOM
const caixaMagica = document.getElementById('caixaMagica');

// Escutando os eventos realizados como o elemento da DOM
caixaMagica.addEventListener("mouseenter", entradaMouse);

caixaMagica.addEventListener("mouseout", saidaMouse);

caixaMagica.addEventListener("click", clickMouse);

// Crinado uma função
function  entradaMouse(){
    caixaMagica.innerText = "Olá, geovanna ;)!";
    caixaMagica.style.backgroundColor = 'black';
}

function saidaMouse (){
    caixaMagica.innerText = "Tchau, até breve ;(!";
    caixaMagica.style.backgroundColor = 'purple';
}

function clickMouse (){
    caixaMagica.innerText = "Você clicou 'o'!";
    caixaMagica.style.backgroundColor = 'yellow';
}
    