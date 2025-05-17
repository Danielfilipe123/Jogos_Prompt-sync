const verificar = require("prompt-sync")({sigint:true});//
var começar = true
while (começar){
console.log("Seja bem vindo ao Pedra, Papel ou Tesoura")
console.log("")
console.log("1.Jogar contra o computador");
console.log("2.Jogar de dois")
console.log("3.Regras")
console.log("4.Sair")

var escolha = verificar("Escolha:")

function vscomputador(){

	 const opcoes = ["pedra", "papel", "tesoura"]

	 console.log("")
	 jogador = verificar("Escolher:").toLowerCase().trim();
	 console.log("")
	 computador = opcoes[Math.floor(Math.random()*opcoes.length)];
	 console.log("")

	 console.log(`O computador escolheu: ${computador}` );
	 console.log("")


if (!opcoes.includes(jogador)) {
  console.log("Jogada inválida");
  console.log("")
}else if (jogador === computador) {
  console.log(`${jogador} empata com ${computador}, EMPATE`);
  console.log("")
} else if (
  (jogador == opcoes[0] && computador ===opcoes[2]) ||
  (jogador == opcoes[1] && computador === opcoes[0]) ||
  (jogador === opcoes[2] && computador === opcoes[1])
) {
  console.log(`${jogador} ganha de ${computador}, o jogador VENCEU`);
  console.log("")
} else {
  console.log(`${jogador} perde para ${computador}, o jogador PERDEU`);
  console.log("")
}

}

function vsjogador2(){

const opcoes = ["pedra", "papel", "tesoura"]

console.log("")
console.log("AVISO: Para o jogo em dupla dar certo, ambos os jogadores precisam escolher uma das opçoes escondidas uma da outra")
console.log("")

jogador1 = verificar("Jogador1:").toLowerCase().trim();
console.clear()
jogador2 = verificar("Jogador2:").toLowerCase().trim();
console.clear("")

if (!opcoes.includes(jogador1) || !opcoes.includes(jogador2)) {
  console.log("Jogada inválida");
  console.log("");
}else if (jogador1 === jogador2) {
  console.log(`${jogador1} empata com ${jogador2}, EMPATE`);
  console.log("")
} else if (
  (jogador1 == opcoes[0] && jogador2 ===opcoes[2]) ||
  (jogador1 == opcoes[1] && jogador2 === opcoes[0]) ||
  (jogador1 === opcoes[2] && jogador2 === opcoes[1])
) {
  console.log(`${jogador1} ganha de ${jogador2}, o jogador1 VENCEU `);
  console.log("")
} else {
  console.log(`${jogador1} perde para ${jogador2}, o jogador2 VENCEU`);
  console.log("")
	}
}

function regras(){


	console.log("")
	console.log("Nesse jogo, o jogador vai ter que escolher pedra, papel e tesoura, existem dois modos: Contra o computador e jogar de dois")
	console.log("")
	console.log("Jogar contra o computador: o jogador escolhe uma das opçoes e o computador tambem, depois disso saberemos quem venceu.")
	console.log("")
	console.log("Jogar de dois: é literamente o modo para dois jogares, quando um dos jogares escolher a opção, o jogo vai esconder a resposta um do outro para facilitar a jogatina ")
	console.log("")
	console.log("Caso não esteja aguentando e quer sair do jogo logo, digite Crtl + c")
	console.log("")

}

switch(escolha){
case "1":
	console.log("Pronto pra jogar")
	vscomputador()
	break;
case "2":
	console.log("Pronto pra jogar")
	vsjogador2()
	break;
case "3":
	regras()
	break;
case "4":
	console.log("saindo")
	começar = false 
	break;
	}
}
