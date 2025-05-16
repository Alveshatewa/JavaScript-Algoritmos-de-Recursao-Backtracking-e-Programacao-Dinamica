/**2- Backtracking 
Problema: Organização  de Segurança em Um Museu 
Um museu quer posicionar seguranças em diferentes salas (organizadas 
em formato de um tabuleiro NxN), de modo que nenhum guarda veja o 
outro (cada guarda cobre toda a linha, coluna e diagonais da sala onde 
estiver). 
Questão: 
Implemente um algoritmo baseado em backtracking que encontre uma 
maneira de posicionar N guardas em N salas sem que se vejam. 
Apresente a solução para N = 4, mostrando o estado final do museu (como 
um tabuleiro com posições dos guardas).  */

const N = 4;

const construirTabuleiro = (tabuleiro) => {

    for (let i = 0; i < N; i++) {
        let linha = '';
        for (let j = 0; j < N; j++) {
            
            linha += tabuleiro[i][j] == 1 ? 'Guarda ' : '. ';

        }
        console.log(linha);
    }
    console.log();
};


const posicaoSegura = (tabuleiro, linha, coluna) => {

    
    for (let i = 0; i < linha; i++) {
        if (tabuleiro[i][coluna] === 1) return false;
    }

    
    for (let i = linha - 1, j = coluna - 1; i >= 0 && j >= 0; i--, j--) {
        if (tabuleiro[i][j] === 1) return false;
    }

    
    for (let i = linha - 1, j = coluna + 1; i >= 0 && j < N; i--, j++) {
        if (tabuleiro[i][j] === 1) return false;
    }

   
    return true;
};

const verificarRainhas = (tabuleiro, linha) => {
    if (linha === N) {
        construirTabuleiro(tabuleiro);
        return true;
    }

    let solucao = false;

    for (let coluna = 0; coluna < N; coluna++) {
        if (posicaoSegura(tabuleiro, linha, coluna)) {
           
            tabuleiro[linha][coluna] = 1;

          
            solucao = verificarRainhas(tabuleiro, linha + 1) || solucao;

         
            tabuleiro[linha][coluna] = 0;
        }
    }

    return solucao;
};


const resolverMuseu = () => {
    const tabuleiro = Array.from({ length: N }, () => Array(N).fill(0));

    if (!verificarRainhas(tabuleiro, 0)) {
        console.log('Nenhuma solução encontrada.');
    }
};

resolverMuseu();