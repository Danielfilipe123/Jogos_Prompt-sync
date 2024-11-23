const verificar = require("prompt-sync")({sigint:true});
var começar = true
while (começar){
console.log("Seja bem vindo ao jogo de adivinhar o numero")
console.log("")
console.log("1.Entrar");
console.log("2.Como vai funcionar?")
console.log("3.Sair")

var escolha = verificar("Escolha:")

function jogar(){
	jogando = true
	while(jogando){

console.log("")
console.log("1.De 1 a 10")

numero1 = verificar("Escolha um numero:")

if (numero1 == 5 ) {
	console.log("Acertou")
	console.log("")
} else{
	console.log("Errou")
	console.log("")
	jogando = false
	continue
}
console.log("2.Numero par, de 1 a 10")

numero2 = verificar("Escolha um numero:")

if (numero2 == 8) {
	console.log("Acertou")
	console.log("")
	} else {
		console.log("Errou")
		console.log("")
		jogando = false
		continue
		}

console.log("3.Numero Impar, de 1 a 10")

numero3 = verificar("Escolha um numero:")

if (numero3 == 3) {
	console.log("Acertou")
	console.log("")
	} else {
		console.log("Errou")
		console.log("")
		jogando = false 
		continue 
	}
console.log("A partir de agora vai ficar dificil, deseja continuar?, digite 1 se sim, 2 se não")

continuar = verificar("digite:")

if (continuar == 1 ){
	console.log("Sim")
	console.log("")
} else if(continuar == 2) {
	console.log("Não")
	console.log("")
	jogando = false
	continue
		} else {
			console.log("Tentou bancar o espertinho(a) né? so por causa disso o jogo vai reiniciar >:)")
			console.log("")
			continue
		}
		console.log("4.Numero par, de 1 a 20")

		numero4 = verificar("Escolha um numero:")

		if (numero4 == 16) {
			console.log("Acertou")
			console.log("")
		} else {
			console.log("Errou")
			console.log("")
			jogando = false 
			continue
		}
	console.log("5.Numero impar, de 1 a 30")

	numero5 = verificar("Escolha um numero:")

	if (numero5 == 27){
		console.log("Acertou")
		console.log("")
	} else {
		console.log("Errou")
		console.log("")
		jogando = false 
		continue
		}
		console.log("6.Numero par, de 1 a 40")

		numero6 = verificar("Escolha um numero:")

		if (numero6 == 36) {
			console.log("Acertou")
			console.log("")
		} else {
			console.log("Errou")
			console.log("")
			jogando = false
			continue
		}

		console.log("7. Numero impar, de 1 a 50")

		numero7 = verificar("Escolha um numero:")

		if (numero7 == 41) {
			console.log("Acertou")
			console.log("")
		} else {
			console.log("Errou")
			console.log("")
			jogando = false 
			continue
		}

		console.log("8. Numero par, 1 a 60")

		numero8 = verificar("Escolha um numero:")

		if (numero8 == 54) {
			console.log("Acertou")
			console.log("")
			} else {
				console.log("Errou")
				console.log("")
				jogando = false 
				continue
			}
		console.log("9. Numero impar, de 1 a 70")

		numero9 = verificar("Escolha um numero:")

		if (numero9 == 63) {
			console.log("Acertou")
			console.log("")
		} else{
			console.log("Errou")
			console.log("")
			jogando = false
			continue
		}
console.log("Chegamos ao numero 10, esse sera extremamente dificil, tem certeza que quer continuar?, digite 1 se sim, digite 2 se não")

bora = verificar("Digite:")

if (bora == 1){
	console.log("Boraaaaaaaa")
	console.log("")
	} else if(bora == 2) {
		console.log("Não, cansei")
		console.log("")
		jogando = false 
		continue
	} else {
		console.log("Aí se tá de palhaçada; não sei se fez isso por curiosidade ou esteja testando o jogo, mas sabe como são as regras, acabou de reiniciar, tomara que tenha decorado as respostas, porque vai precisar ")
		console.log()
		continue
	}

console.log("10. De 1 a 9999999999999")

numero10 = verificar("ESCOLHA O NUMERO E FALHE MISERAVELMENTE:")

if (numero10 == 4020){
	console.log("Impossi, que dizer, você ganhouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu, parabens jogador, você zerou o jogo, como recompensa, toma esse coelho imaginario: ")
	console.log("(\\_/)\n( •.•)\n(\")_(\")");
	console.log("\n")
jogando = false 
continue 
} else {
	console.log("Foi mal, peguei pesado; quer saber, vou te dar uma dica direta, o numero é 40XX; e pra facilitar mais ainda, os numeros com xx é abaixo de 30, anote ai, você vai precisar")
	console.log("")
	jogando = false 
	continue
}

}
}

function regras(){
console.log("\n")
console.log("O jogo terá 10 números para você acertar. Se acertar todos, você vence!, mas caso errar, você sai do jogo automaticamente")
console.log("")
console.log("Vai ter um titulo inicial te guiando em cada escolha para não se perder nos numeros ")
console.log("")
console.log("E caso não esteja suportando mais jogar, aperte Ctrl + c para sair do jogo inteiro")
console.log("\n")
}

switch(escolha){
case "1":
	console.log("Pronto pra jogar")
	jogar()
	break;
case "2":
	regras()
	break;
case "3":
	console.log("saindo")
	começar = false 
	break;
	}
}
