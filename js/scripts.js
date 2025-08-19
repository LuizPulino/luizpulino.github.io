// Este script carrega a fonte Roboto do Google Fonts para seguir as diretrizes do Material Design.
// A fonte é adicionada de forma assíncrona, o que garante que ela não bloqueie o carregamento da página.
function loadGoogleFonts() {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
}

// Chame a função para carregar a fonte quando a página estiver pronta
window.onload = loadGoogleFonts;