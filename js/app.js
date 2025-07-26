function alterarStatus(gameId) {
    let jogo = document.getElementById(gameId);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');
    let nomeJogo = jogo.querySelector('.dashboard__item__name').textContent;
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // DEVOLVER
        if (confirm(`Tem certeza que deseja devolver "${nomeJogo}"?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            alert(`${nomeJogo} foi devolvido com sucesso!`);
            console.log(`Jogos alugados: ${contarJogosAlugados()}`);
        }
    } else {
        // ALUGAR
        if (confirm(`Você tem certeza que deseja alugar "${nomeJogo}"?`)) {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
            alert(`Parabéns! Você alugou ${nomeJogo}. Divirta-se!`);
            console.log(`Jogos alugados: ${contarJogosAlugados()}`);
        }
    }
}

function contarJogosAlugados() {
    return document.querySelectorAll('.dashboard__item__img--rented').length;
}

// Dentro da função alterarStatus, após cada ação, adicione:
//console.log(`Jogos alugados: ${contarJogosAlugados()}`);