document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();

    const alternativaA = document.getElementById('alternativaA');
    const alternativaB = document.getElementById('alternativaB');
    const mensagem = document.getElementById('mensagem');

    if (Number(alternativaB.value) > Number(alternativaA.value)) {
        mensagem.textContent = 'PARABÉNS: Sucesso a Alternativa B é maior que Alternativa A.';
        mensagem.className = 'mensagem-sucesso';
        mensagem.style.display = 'block';
    } else {
        mensagem.textContent = 'OOPS tente outra vez: Alternativa B deve ser maior que Alternativa A.';
        mensagem.className = 'mensagem-erro';
        mensagem.style.display = 'block';
    }

    alternativaA.value = '';
    alternativaB.value = '';
});

