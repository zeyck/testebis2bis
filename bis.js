/*
Resolvi fazer em Javascript, pois é uma linguagem que estou aprendendo além do PHP, gostei do desafio proposto, abriu a minha mente, para planejamento de todo o corpo é estrutura, sendo de fato, um aprendizado. Estou aberta a feedback.

##Na minha máquina rodou 

*/

let jogador1 = prompt("placar do jogador1");
let jogador2 = prompt("placar do jogador2");
// a ideia aqui é ter a entrada para os dois jogadores

var placar = jogador1 + jogador2;
// aqui eu somo as rodadas, para poder separar nas duas condições

placar1 = placar % 5;
placar2 = placar % 2;
//coloquei o resto da divisão para como condições

alert("saque" + jogador1 + ":" + "saque" + jogador2);

//colocar o placar do saques

function rodada1() {
    if (placar1 === 1) alert("jogador1");
    else alert("jogador2");
}
//colocar as condições

function rodada2() {
    if (placar2 === 1) alert("jogador1");
    else alert("jogador2");
}

if (placar < 40) console.log(rodada1());
else console.log(rodada2());
