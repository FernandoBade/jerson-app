function digitar(elemento, conteudo, velocidade, callback) {
    velocidade ? velocidade : 0;
    callback ? callback : null;

    const letras = Array.from(conteudo);

    function digitarLetra() {
        if (letras.length) {
            elemento.textContent += letras.shift();
            elemento.scrollTop = elemento.scrollHeight;
            setTimeout(digitarLetra, velocidade);
        } else if (callback) {
            callback();
        }
    }

    digitarLetra();
}

module.exports = digitar;
