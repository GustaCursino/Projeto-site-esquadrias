// Seleciona o botão "Ver Catálogo" e a galeria
var verCatalogoBtn = document.getElementById('ver-catalogo');
var galeria = document.getElementById('galeria');

// Adiciona o evento de clique no botão "Ver Catálogo"
verCatalogoBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o redirecionamento do link

    // Se a galeria estiver escondida, exibe-a com a animação
    if (galeria.style.display === 'none' || galeria.style.display === '') {
        galeria.style.display = 'block'; // Mostra o catálogo
        setTimeout(function() {
            galeria.classList.add('mostrar'); // Adiciona a classe para a animação
        }, 10); // Pequeno atraso para garantir que a animação seja aplicada
    } else {
        galeria.classList.remove('mostrar'); // Remove a classe para iniciar a animação de saída
        setTimeout(function() {
            galeria.style.display = 'none'; // Esconde o catálogo após a animação
        }, 1000); // Tempo da animação de saída
    }
});

// Código para ampliar imagens do catálogo ao clicar
var modal = document.getElementById('modal');
var modalImg = document.getElementById('imgModal');
var closeModal = document.getElementsByClassName('close')[0];

// Seleciona todas as imagens do catálogo (somente as da galeria do index.html)
document.querySelectorAll('.galeriadoindex img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'flex'; // Exibe o modal
        modalImg.src = this.src; // Define a imagem do modal
    });
});

// Fecha o modal ao clicar no "X"
closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; // Esconde o modal
});

// Animação de hover nos botões
document.querySelectorAll('.catalogo-btn, .whatsapp-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.1)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});






