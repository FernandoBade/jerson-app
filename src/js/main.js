document.addEventListener('DOMContentLoaded', function () {
    const inputTexto = document.getElementById('inputTexto');
    const enviarBtn = document.getElementById('enviarBtn');
    const respostaChat = document.getElementById('respostaChat');

    // Função para criar uma mensagem no chat
    function criarMensagem(conteudo, tipo) {
      const novaMensagem = document.createElement('div');
      novaMensagem.classList.add('mensagem', tipo);
      novaMensagem.textContent = conteudo;
      respostaChat.appendChild(novaMensagem);
      rolarParaBaixo();
    }


    function rolarParaBaixo() {
      respostaChat.scrollTop = respostaChat.scrollHeight;
    }


    const respostasAleatorias = [
      "Entendi, vou verificar isso.",
      "Isso faz sentido, continue.",
      "Certo, qual o próximo passo?",
      "Interessante, mais alguma coisa?",
      "Sim, posso ajudar nisso."
    ];


    enviarBtn.addEventListener('click', function () {
      const texto = inputTexto.value.trim();

      if (texto) {

        criarMensagem(texto, 'enviada');


        inputTexto.value = '';


        setTimeout(() => {
          const respostaAleatoria = respostasAleatorias[Math.floor(Math.random() * respostasAleatorias.length)];
          criarMensagem(respostaAleatoria, 'recebida');
        }, 1000);
      }
    });
  });