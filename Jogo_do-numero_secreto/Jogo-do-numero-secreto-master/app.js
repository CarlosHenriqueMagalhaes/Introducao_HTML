alert("Jogo do número secreto");
let numeroSecreto = pardeInt(Math.random () * numeroMaximo + 1 );
let numeroMaximo = 100
console.log (numeroSecreto);
let numeroChute;
let numeroDeTentativas = 1;

// enquanto chute não for igual ao número secreto
while (numeroChute != numeroSecreto ){
    numeroChute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);
    if (numeroSecreto == numeroChute) {
        break;
    } else{
        if (numeroSecreto > numeroChute) {
            alert (`Você errou, o número secreto é maior que ${numeroChute}, tente novamente!`);
        } else{
            alert (`Você errou, o número secreto é menor que ${numeroChute}, tente novamente!`);
        }
// numeroDeTentativas = numeroDeTentativas + 1;
        numeroDeTentativas ++;
    }   
}

let palavraTentativa = numeroDeTentativas > 1 ? `tentativas` : `tentativa`
alert (`Você descobriu o número secreto! ${numeroSecreto}, com ${tentativas} ${tentativa}!`);