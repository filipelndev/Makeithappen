// Ativar o efeito de rolagem suave nos links do menu
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(0);
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
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

// Exemplo de um carrossel simples na galeria (vamos implementar na página galeria)
let indiceAtual = 0;
const imagens = document.querySelectorAll('.galeria img');

function trocarImagem() {
    imagens.forEach(img => img.style.display = 'none');
    imagens[indiceAtual].style.display = 'block';
    indiceAtual = (indiceAtual + 1) % imagens.length;
}

if (imagens.length > 0) {
    setInterval(trocarImagem, 3000); // Troca a cada 3 segundos
}
function abrirImagem(img) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("imgAmpliada").src = img.src;
}

function fecharImagem() {
    document.getElementById("modal").style.display = "none";
}
