// Capturando o elemnto da DOM
const caixaMagica = document.getElementById('caixaMagica');

// Escutando os eventos realizados como o elemento da DOM
caixaMagica.addEventListener('mouseenter', entradaMouse);

caixaMagica.addEventListener('mouseout', saidaMouse);

// Crinado uma função
function  entradaMouse(){
    caixaMagica.innerText = "Olá, geovanna ;)!";
    caixaMagica.style.backgroundColor = 'black';
}

function saidaMouse (){
    caixaMagica.innerText = "Tchau, até breve ;)!";
    caixaMagica.style.backgroundColor = 'purple';
}
    