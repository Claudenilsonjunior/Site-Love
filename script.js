document.getElementById('start-button').addEventListener('click', function() {
    // Esconde a página inicial
    document.getElementById('welcome-page').style.display = 'none';

    // Mostra a página com a linha do tempo
    document.getElementById('timeline-page').style.display = 'block';

    // Inicia a música de fundo
    document.getElementById('background-music').play();
});

// Selecione todos os elementos "li" na linha do tempo
var items = document.querySelectorAll("li");

// Função para verificar se o item está visível na tela
function isItemInView(item) {
    var rect = item.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função de callback para adicionar a classe "show" aos itens visíveis
function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isItemInView(items[i])) {
            items[i].classList.add("show");
        }
    }
}

// Atrasando a execução da função de rolagem para garantir que os elementos da linha do tempo estejam carregados
window.addEventListener("load", function() {
    callbackFunc();  // Verifica a visibilidade dos itens assim que a página carrega
    window.addEventListener("resize", callbackFunc);  // Acompanhe alterações no tamanho da janela
    window.addEventListener("scroll", callbackFunc);  // Acompanhe a rolagem
});
