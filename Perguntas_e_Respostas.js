const verificar = require("prompt-sync")({ sigint: true });
começar = true 
while(começar){
	console.log("Seja bem vindo ao perguntas e respostas")
	console.log("")
	console.log("1.Entrar")
	console.log("2.Como vai funcionar")
	console.log("3.Sair")

	escolha = verificar("Escolha:")

	function jogar(){
	
	const perguntas = [
		{pergunta:"Qual linguagem é baseada em protótipos e é essencial para o desenvolvimento web moderno?:", resposta:"JavaScript"},
		{pergunta:"Qual sistema de gerenciamento de banco de dados relacional é amplamente usado em aplicações web e suporta SQL como linguagem de consulta?:", resposta:"MySQL"},
		{pergunta:"Qual linguagem de programação é frequentemente usada para criar sites dinâmicos e processar formulários no backend?:", resposta:"PHP"},
		{pergunta:"Qual linguagem é composta por elementos chamados de tags e define a estrutura de uma página da web?:", resposta:"HTML"},
		{pergunta:"Qual tecnologia permite personalizar o visual de uma página da web, incluindo cores, fontes e posicionamento?:", resposta:"CSS"},
		{pergunta:"Qual linguagem orientada a objetos é usada para desenvolvimento Android e aplicações corporativas?:", resposta:"Java"},
		{pergunta:"Qual framework front-end utiliza uma abordagem baseada em compilação para melhorar o desempenho da interface?:", resposta:"Svelte"},
		{pergunta:"Qual framework JavaScript usa um sistema de directives e é conhecido por sua fácil integração com projetos existentes?:", resposta:"Vue"},
		{pergunta:"Qual framework PHP é baseado no padrão MVC e facilita a criação de aplicações web robustas?:", resposta:"Laravel"},
		{pergunta:"Qual linguagem de programação é amplamente usada para sistemas de alto desempenho, como jogos e engines gráficas?:", resposta:"C++"},
	];
 
 acertos = 0;
 erros = 0;

 for(i = 0; i < perguntas.length; i++){
 	responder = verificar(`${i + 1}. ${perguntas[i].pergunta} `)
 	if(responder.trim().toLowerCase()=== perguntas[i].resposta.toLowerCase()) {
 		console.log("Resposta correta\n");
 		acertos++;
 	} else {
 		console.log("Resposta errada")
 		erros++
 	}
  }
     console.log(`\nTerminou. Você acertou ${acertos} e errou ${erros} perguntas.\n`);
	}		

	function regras(){
console.log("\n")
console.log("O tema sera sobre linguagem de programação, tera 10 perguntas para acertar. O jogo tem um contador, quando terminar todas as perguntas, o contador dira quantos errou e acertou ")
console.log("")
console.log("E caso não esteja suportando mais jogar, aperte Ctrl + c para sair do jogo inteiro")
console.log("\n")
}

	switch(escolha){
	case "1":
		console.log("pronto pra jogar")
		jogar()
		break;
	case "2":
		regras()
		break;
	case "3":
		console.log("Saindo")
		começar = false
		break;
	}

}