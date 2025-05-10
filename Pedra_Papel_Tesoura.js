const verificar = require("prompt-sync")({ sigint: true });

var começar = true
while (começar){
console.log("Seja bem vindo ao jogo ao Pedra, Papel e Tesoura")
console.log("")
console.log("1.Entrar");
console.log("2.Como vai funcionar?")
console.log("3.Sair")


var escolha = verificar("Escolha:");

function jogar () {

	console.log("");
	console.log("Ainda não ta pronto");
	console.log("");
}

function regras() {

	console.log("");
	console.log("Ja que não ta pronto, so vou preencher o sobre quando o jogo tiver pronto");
	console.log("");
}
switch (escolha) {
        case "1":
            console.log("Pronto para jogar\n");
            jogar();
            break;
        case "2":
            regras();
            break;
        case "3":
            console.log("Saindo...\n");
            começar = false;
            break;
          }
      }