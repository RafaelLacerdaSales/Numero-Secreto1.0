let listaDeNumenerosSorteados = [];
let numeroLimite = 10
let tentativas = 1;
let quantidadeDeNumeros = 10;
let numeroScreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
campo.innerHTML = texto; 
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rete:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p',`Escolha um número entre 1 e ${quantidadeDeNumeros}`);
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroScreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `você descobriu o Número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagemTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroScreto){
            exibirTextoNaTela('p' , 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo()
    }
}
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumenerosSorteados.length;


if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumenerosSorteados = []
}

   if(listaDeNumenerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio()
   }else{
    listaDeNumenerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumenerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}
function reniciarjogo() {
    numeroScreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true)
}