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

    // Exemplo de um carrossel simples na galeria
    let indiceAtual = 0;
    const imagens = document.querySelectorAll('.galeria img');

    function trocarImagem() {
        if (imagens.length > 0) {
            imagens.forEach(img => img.style.display = 'none');
            imagens[indiceAtual].style.display = 'block';
            indiceAtual = (indiceAtual + 1) % imagens.length;
        }
    }

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
