//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Seleciona os elementos da DOM
let inputAmigo = /**@type {HTMLInputElement} */ (document.getElementById("amigo"));
let listaExibicao = document.getElementById("listaAmigos");
let resultadoExibicao = document.getElementById("resultado");
let botaoAdicionar = document.getElementById("botaoAdicionar");
let botaoSortear = document.getElementById("botaoSortear");
let botaoLimparResultado = document.getElementById("botaoLimparResultado");

// Array para armazenar nomes
let listaAmigos = [];

// Adiciona evento para botão ADICIONAR
botaoAdicionar.addEventListener("click", adicionarAmigo);

// Adiciona evento para botão SORTEAR
botaoSortear.addEventListener("click", sortearAmigo);

// Adiciona evento para botão LIMPAR RESULTADO
botaoLimparResultado.addEventListener("click", limparResultado);

// Função para adicionar amigo na Lista
function adicionarAmigo() {
    let nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Digite um nome antes de adicionar!");
        return
    }

    listaAmigos.push(nome); // Adiciona no array
    atualizarLista();
    inputAmigo.value = "";
    inputAmigo.focus();
}

// Atualiza a exibição da lista de amigos
function atualizarLista() {
    listaExibicao.innerHTML = "";

    for (let amigo of listaAmigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaExibicao.appendChild(li);
    }
}

// Função para atualizar a lista na tela
function sortearAmigo() {
    if (listaAmigos.length === 0 ) {
        alert ("Adicione pelo menos um nome para reallizar o sorteio!")
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    resultadoExibicao.textContent = `O amigo sorteado é: ${amigoSorteado}`;
}

//Função para limpar resultado
function limparResultado () {
    resultadoExibicao.textContent = "";
}