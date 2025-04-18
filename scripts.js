document.addEventListener("DOMContentLoaded", function () {
    // Código só será executado quando o HTML estiver pronto

    // Ativar o efeito de rolagem suave nos links do menu
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
    
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // Animação ao rolar a página
    const elementosAnimados = document.querySelectorAll('.servico');

    function revelarElementos() {
        const alturaJanela = window.innerHeight;

        elementosAnimados.forEach(el => {
            const posicao = el.getBoundingClientRect().top;

            if (posicao < alturaJanela - 100) {
                el.style.transform = 'scale(1.05)';
                el.style.opacity = '1';
            }
        });
    }

    window.addEventListener('scroll', revelarElementos);
    revelarElementos();

   // Selecionando as imagens e o modal
const imagens = document.querySelectorAll('.foto'); // Seleciona todas as imagens com a classe 'foto'
const modal = document.getElementById('modal'); // Seleciona o modal
const fotoAmpliada = document.getElementById('fotoAmpliada'); // Seleciona a imagem ampliada no modal
const fecharModal = document.getElementById('fecharModal'); // Seleciona o botão de fechar

// Adicionando evento de clique nas imagens
imagens.forEach(imagem => {
    imagem.addEventListener('click', () => {
        // Define a imagem ampliada com o 'src' da imagem clicada
        fotoAmpliada.src = imagem.src;
        modal.style.display = 'flex'; // Exibe o modal
    });
});

// Fechar o modal ao clicar no "X" ou fora da imagem ampliada
fecharModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Fecha o modal
});

// Fechar o modal se clicar fora da imagem ampliada
modal.addEventListener('click', (e) => {
    if (e.target === modal) { // Se o clique for fora da imagem
        modal.style.display = 'none'; // Fecha o modal
    }
});

    if (imagens.length > 0) {
        setInterval(trocarImagem, 3000);
    }

    document.addEventListener("DOMContentLoaded", function () {
        const servicosContainer = document.querySelector('.servicos-container');
        let isMouseDown = false;
        let startX, scrollLeft;
    
        servicosContainer.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            startX = e.pageX - servicosContainer.offsetLeft;
            scrollLeft = servicosContainer.scrollLeft;
        });
    
        servicosContainer.addEventListener('mouseleave', () => {
            isMouseDown = false;
        });
    
        servicosContainer.addEventListener('mouseup', () => {
            isMouseDown = false;
        });
    
        servicosContainer.addEventListener('mousemove', (e) => {
            if (!isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - servicosContainer.offsetLeft;
            const walk = (x - startX) * 3; // 3 é a velocidade do scroll
            servicosContainer.scrollLeft = scrollLeft - walk;
        });
    });

});
const carrossel = document.querySelector('.carrossel');
const items = document.querySelectorAll('.item');
const totalItems = items.length;
let index = 0;

document.querySelector('.proximo').addEventListener('click', () => {
    mudarSlide(1);
});

document.querySelector('.anterior').addEventListener('click', () => {
    mudarSlide(-1);
});

function mudarSlide(direcao) {
    items[index].classList.remove('ativo');
    index = (index + direcao + totalItems) % totalItems;
    items[index].classList.add('ativo');

    // Move o carrossel visualmente
    const deslocamento = -index * 100;
    carrossel.style.transform = `translateX(${deslocamento}%)`;
}

// Alternar automaticamente a cada 5 segundos
setInterval(() => {
    mudarSlide(1);
}, 5000);

document.addEventListener("DOMContentLoaded", function () {
    // Código para selecionar a foto na galeria e destacá-la acima
    const galeriaImgs = document.querySelectorAll('.galeria img');
    const fotoSelecionada = document.getElementById('fotoSelecionada');

    galeriaImgs.forEach(img => {
        img.addEventListener('click', () => {
            fotoSelecionada.src = img.src;  // Atualiza a imagem destacada
        });
    });
});

// Função para capturar os parâmetros da URL
function obterParametrosURL() {
    const parametros = new URLSearchParams(window.location.search);

    return {
        nome: parametros.get('nome') || '',
        data: parametros.get('data') || '',
        local: parametros.get('local') || '',
        convidados: parametros.get('convidados') || '',
        observacoes: parametros.get('observacoes') || ''
    };
}

// Exibir os dados na página
document.addEventListener("DOMContentLoaded", function () {
    const dados = obterParametrosURL();

    // Atualizar os campos ou criar um resumo na página
    document.getElementById('resumo-nome').textContent = dados.nome;
    document.getElementById('resumo-data').textContent = dados.data;
    document.getElementById('resumo-local').textContent = dados.local;
    document.getElementById('resumo-convidados').textContent = dados.convidados;
    document.getElementById('resumo-observacoes').textContent = dados.observacoes;
});

document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores do formulário e codifica para a URL
    const nome = encodeURIComponent(document.getElementById('nome').value);
    const data = encodeURIComponent(document.getElementById('data').value);
    const local = encodeURIComponent(document.getElementById('local').value);
    const convidados = encodeURIComponent(document.getElementById('convidados').value);
    const observacoes = encodeURIComponent(document.getElementById('observacoes').value);

    // Monta a URL correta com os parâmetros
    const novaURL = `sobre.html?nome=${nome}&data=${data}&local=${local}&convidados=${convidados}&observacoes=${observacoes}`;

    // Redireciona para a nova URL
    window.location.assign(novaURL);
});

