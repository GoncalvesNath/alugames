function alterarStatus(gameId) {
    let gameSelecionado = document.getElementById(`game-${gameId}`);
    let botao = gameSelecionado.querySelector(".dashboard__item__button");
    let imgJogo = gameSelecionado.querySelector(".dashboard__item__img");

    // Verifica se o jogo está alugado
    if (botao.classList.contains("dashboard__item__button--return")) {
        // Se o botão está em "Devolver", faz a devolução
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent='Alugar';
        imgJogo.classList.remove("dashboard__item__img--rented");
    } else {
        // Se o botão está em "Alugar", faz o aluguel
        botao.classList.add("dashboard__item__button--return");
        botão
        botao.textContent='Devolver';
        imgJogo.classList.add("dashboard__item__img--rented");
    }
}


