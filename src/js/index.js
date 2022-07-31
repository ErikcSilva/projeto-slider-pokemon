
  const btnAvancar = document.getElementById("btn-avancar");
  const btnVoltar = document.getElementById("btn-voltar");
  const cartoes = document.querySelectorAll(".cartao");
  let cartaoAtual = 0;

  function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
  }
  function mostrarCartao(indiceCartao){

    cartoes[cartaoAtual].classList.add("selecionado");

    
  }

  btnAvancar.addEventListener("click", function(){

    if(cartaoAtual === cartoes.length - 1) return

    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);

 }
 );

 /* passo 2 -dar um jeito de identificar o clique do usuario na seta.*/


 /*Objetivo 2 - quando clicar na seta de voltar temos que mostra o proximo botão da lista
 - passo 1 - dar um jeito de pegar o elemento HTML da seta e avançar
  - passo 2 -dar um jeito de identificar o clique do usuario na seta.
  - passo3 - fazer aparecer o proximo cartao da lista
  - passo4 - buscar o cartao que a seta selecionado e esconder */


 btnVoltar.addEventListener("click", function(){
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();
 
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
 }
 );

 /* 
Objetivo 1 - quando clicar na seta de avançar temos que mostra o proximo botão da lista
 - passo 1 - dar um jeito de pegar o elemento HTML da seta e avançar
  - passo 2 -dar um jeito de identificar o clique do usuario na seta.
  - passo3 - fazer aparecer o proximo cartao da lista
  - passo4 - buscar o cartao que a seta selecionado e esconder

  Objetivo 2 - quando clicar na seta de voltar temos que mostra o proximo botão da lista
 - passo 1 - dar um jeito de pegar o elemento HTML da seta e avançar
  - passo 2 -dar um jeito de identificar o clique do usuario na seta.
  - passo3 - fazer aparecer o proximo cartao da lista
  - passo4 - buscar o cartao que a seta selecionado e esconder

*/


/* 
Objetivo 1 - quando clicar na seta de avançar temos que mostra o proximo botão da lista
 - passo 1 - dar um jeito de pegar o elemento HTML da seta e avançar
  - passo 2 -dar um jeito de identificar o clique do usuario na seta.
  - passo3 - fazer aparecer o proximo cartao da lista
  - passo4 - buscar o cartao que a seta selecionado e esconder
  */

  /*- passo 1 - dar um jeito de pegar o elemento HTML da seta e avançar*/
