/**
 * 3- Programação Dinâmica 
Problema: Otimização de Espaço em Um Drone de Entregas 
Uma empresa de entregas por drone precisa decidir quais pacotes colocar 
no drone para uma determinada viagem. O drone tem uma capacidade 
máxima de carga (em kg) e cada pacote tem um peso e um valor de 
prioridade. O objetivo é maximizar a prioridade total dos pacotes 
carregados sem ultrapassar o limite de carga. 
Esse é o clássico problema da mochila 0/1, adaptado a um cenário 
logístico moderno. 
Questão: 
Dado o segue conjunto de pacotes: 
Pacote A: peso 2kg, prioridade 3   
Pacote B: peso 3kg, prioridade 4   
Pacote C: peso 4kg, prioridade 5   
Pacote D: peso 5kg, prioridade 8   
Capacidade do drone: 8kg  
a) Monte a tabela da programação dinâmica para esse problema (matriz 
de solução). 
b)  Indique quais pacotes devem ser levados para atingir a prioridade 
máxima. 
c)  Qual o valor total de prioridade atingido? 
 */

function mochila() {

    const pacotes = [
        { nome: "A", peso: 2, prioridade: 3 },
        { nome: "B", peso: 3, prioridade: 4 },
        { nome: "C", peso: 4, prioridade: 5 },
        { nome: "D", peso: 5, prioridade: 8 },
    ];

    const capacidade = 8;


    const n = pacotes.length;
    
    const dp = Array(n + 1)
        .fill(0)
        .map(() => Array(capacidade + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacidade; w++) {
            if (pacotes[i - 1].peso > w) {
                dp[i][w] = dp[i - 1][w]; 
            } else {
                dp[i][w] = Math.max(
                    dp[i - 1][w], 
                    dp[i - 1][w - pacotes[i - 1].peso] + pacotes[i - 1].prioridade 
                );
            }
        }
    }

   
    let w = capacidade;

    const pacotesSelecionados = [];
    for (let i = n; i > 0; i--) {
        if (dp[i][w] !== dp[i - 1][w]) {
            pacotesSelecionados.push(pacotes[i - 1].nome);
            w -= pacotes[i - 1].peso;
        }
    }

  
    const prioridadeMaxima = dp[n][capacidade];

    return {
        prioridadeMaxima,
        pacotesSelecionados: pacotesSelecionados.reverse(),
        tabelaDP: dp,
    };
}


const resultado = mochila();
console.log("Tabela de Programação Dinâmica:", resultado.tabelaDP);
console.log("Pacotes Selecionados:", resultado.pacotesSelecionados);
console.log("Prioridade Máxima:", resultado.prioridadeMaxima);