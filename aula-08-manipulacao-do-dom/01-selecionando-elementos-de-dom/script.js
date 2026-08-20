// // JavaScript

// //Selecionando um elemento pela Tag
// const p0 = window.document.getElementsByTagName('p')[0];

// p0.style.color = "purple";
// p0.innerText = "Mudei o texto";

// const p1 = document.getElementsByTagName("p")[1];

// p1.style.color = "green";

// // // Capturando o corpo do site
// const corpoSite = window.document.body;

// // // Mudando sua cor
// corpoSite.style.background = "black";

// // // Acessando conteúdo de um elemento DOM
// document.write(`<br> No 2º parágrafo do site está escrito assim: ${p1.innerText}`);

//ID
const pa2 = document.getElementById("pa2");

pa2.style.background = "purple";
pa2.innerText = "Selecionado elemento pelo ID";

//NOME
const nome = document.getElementsByName("nome")[0];

nome.style.background = "blue";
nome.innerText = "Selecionado pelo nome";

//CLASSE
const classe = document.getElementsByClassName("classe")[0];

classe.style.background = "red";
classe.innerText = "Selecionado pela classe";

//SELETOR
const seletor = document.querySelector("p:nth-of-type(4)");

seletor.style.color = "black";
seletor.style.background = "yellow";
seletor.innerText = "Selecionado pelo seletor";





