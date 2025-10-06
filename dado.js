// Array com personagens
const carro = [
    { moto: "Panico", imagem: "./assets/fantasia1.jpg" },
    { moto: "Palhaço", imagem: "./assets/fantasia2.jpg" },
    { moto: "Munia", imagem: "./assets/fantasia3.jpg" },
    { moto: "Dracula", imagem: "./assets/fantasia4.jpg" },
    { moto: "Montado", imagem: "./assets/fantasia5.jpg" },
    { moto: "Tina a Fantasa", imagem: "./assets/fantasia6.jpg" },
    { moto: "Bruxa", imagem: "./assets/fantasia7.jpg" },
    { moto: "tata", imagem: "./assets/fantasia8.jpg" },
    { moto: "Noiva", imagem: "./assets/fantasia9.jpg" }
    
];

// Pegando os elementos
const botao = document.getElementById("botao");
const resultadoElemento = document.getElementById("resultado");
const imagemElemento = document.getElementById("dadoImagem");

// Só adiciona o listener se o botão existir (previne erros se o script for carregado antes do HTML)
if (botao) {
    botao.addEventListener("click", function () {
        const indice = Math.floor(Math.random() * carro.length);
        const personagemSorteado = carro[indice];

        // Atualiza o texto se o elemento existir
        if (resultadoElemento) {
            resultadoElemento.textContent = `Sua Fantasia é: ${personagemSorteado.moto}`;
        }

        // Atualiza a imagem se o elemento existir
        if (imagemElemento) {
            imagemElemento.src = personagemSorteado.imagem;
            imagemElemento.style.display = "block";
        }
    });
    
} else {
    
    console.warn('Elemento #botao não encontrado. Nenhum listener foi adicionado.');
}
// Função para fazer as imagens girarem antes de mostrar o resultado
function girarImagensAntesDoResultado() {
    let contador = 0;
    const tempoGiro = 100; // tempo entre trocas de imagem (ms)
    const duracaoTotal = 2000; // tempo total do giro (2 segundos)
    const inicio = Date.now();

    const intervalo = setInterval(() => {
        const indiceAleatorio = Math.floor(Math.random() * carro.length);
        if (imagemElemento) {
            imagemElemento.src = carro[indiceAleatorio].imagem;
            imagemElemento.style.display = "block";
        }

        contador++;

        // Para o giro depois do tempo total
        if (Date.now() - inicio >= duracaoTotal) {
            clearInterval(intervalo);

            // Depois do giro, sorteia o resultado final
            const indiceFinal = Math.floor(Math.random() * carro.length);
            const personagemSorteado = carro[indiceFinal];

            if (resultadoElemento) {
                resultadoElemento.textContent = `Sua Fantasia é: ${personagemSorteado.moto}`;
            }

            if (imagemElemento) {
                imagemElemento.src = personagemSorteado.imagem;
            }
        }
    }, tempoGiro);
}

// Adiciona a nova funcionalidade sem mexer no código principal
if (botao) {
    botao.removeEventListener("click", () => {}); // só pra garantir que não duplica
    botao.addEventListener("click", function () {
        girarImagensAntesDoResultado();
    });
}
