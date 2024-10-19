const mostrarLoading = () => {
    const respostaChat = document.getElementById('respostaChat');
    const loadingContainer = document.createElement('div');
    loadingContainer.id = 'loading-img';
    loadingContainer.innerHTML = '<img src="../../public/loading.svg" class="icone-loading" alt="Loading...">';

    respostaChat.appendChild(loadingContainer);
    respostaChat.scrollTop = respostaChat.scrollHeight;
};

const removerLoading = () => {
    document.getElementById('loading-img')?.remove();
};

module.exports = {
    mostrarLoading,
    removerLoading
};
