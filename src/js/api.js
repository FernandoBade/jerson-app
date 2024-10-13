document.getElementById('enviarBtn').addEventListener('click', () => {
  const inputTexto = document.getElementById('inputTexto').value;
  const respostaChat = document.getElementById('respostaChat');

  // Substitua pela sua API Key e endpoint para integração com GPT
  const apiKey = 'SUA_API_KEY_AQUI';
  const url = 'https://api.openai.com/v1/completions';

  const dados = {
    model: 'text-davinci-003',
    prompt: inputTexto,
    max_tokens: 100,
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(dados)
  })
  .then(response => response.json())
  .then(data => {
    respostaChat.textContent = data.choices[0].text;
  })
  .catch(error => {
    respostaChat.textContent = 'Erro ao comunicar com o servidor.';
    console.error('Erro:', error);
  });
});