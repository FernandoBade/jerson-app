const { mostrarLoading, removerLoading } = require('../js/loading');
const digitar = require('../js/digitar');
const query = require('../js/api');
query({
    "inputs": "What a lovelly fay!",
    "options": {
      "wait_for_model": true,
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const inputTexto = document.getElementById('inputPrincipal');
    const btnEnviar = document.getElementById('btnEnviar');
    const respostaChat = document.getElementById('respostaChat');

    inputTexto.addEventListener('input', () => {
        btnEnviar.disabled = inputTexto.value.trim() === '';
    });

    function enviarMensagem(conteudo, tipo) {
        const novaMensagem = document.createElement('div');
        novaMensagem.classList.add('mensagem', tipo);
        novaMensagem.textContent = conteudo;
        respostaChat.appendChild(novaMensagem);
        respostaChat.scrollTop = respostaChat.scrollHeight;
    }

    const respostasAleatorias = [
        "Entendi, vou verificar isso.",
        "Isso faz sentido, continue.",
        "Certo, qual o próximo passo?",
        "Interessante, mais alguma coisa?",
        "Sim, posso ajudar nisso."
    ];

    btnEnviar.addEventListener('click', function () {
        const texto = inputTexto.value.trim();

        if (texto) {
            enviarMensagem(texto, 'enviada');
            inputTexto.value = '';
            btnEnviar.disabled = true;

            setTimeout(() => {
                mostrarLoading();
            }, 500);

            setTimeout(() => {
                removerLoading();
                const respostaAleatoria = respostasAleatorias[Math.floor(Math.random() * respostasAleatorias.length)];

                const novaMensagem = document.createElement('div');
                novaMensagem.classList.add('mensagem', 'recebida');
                respostaChat.appendChild(novaMensagem);

                digitar(novaMensagem, respostaAleatoria, 10);
            }, 3000);
        }
    });
});
