// Função para mostrar a página selecionada
function showPage(pageId) {
    // Esconde todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Mostra a página clicada
    const page = document.getElementById(pageId);
    if (page) {
        page.style.display = 'block';
    }
}

// Ao carregar a página, exibe a página inicial (home)
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});
