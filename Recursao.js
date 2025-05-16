/**
 * 1- Recursão 
Problema: Logística de Entregas em Armazéns Automatizados 
Uma empresa de e-commerce possui um sistema de transporte robótico 
dentro do armazém. Cada robô precisa mover pacotes de uma estante 
(origem) para uma área de despacho (destino), mas só pode usar uma 
estante auxiliar para transferir os pacotes temporariamente e, só pode 
mover um pacote por vez. Além disso, pacotes maiores não podem ser 
colocados sobre pacotes menores. 
Questão: 
Implemente um algoritmo recursivo que simule o processo de 
movimentação de N pacotes de uma estante para outra, usando uma 
estante auxiliar. Mostre o passo a passo da movimentação para N = 3 
pacotes. 
 */

const N = 5

const moverPacotes = (N, origem, destino, auxiliar) => {

    if( N == 1){

        console.log(`Mover pacote 1 de ${origem} para ${destino}`)

        return
    }

    moverPacotes( N - 1, origem, auxiliar, destino)

    console.log(`Mover Pacote ${N} de ${origem} para ${destino}`)

    moverPacotes(N - 1, origem, auxiliar, destino)

}

moverPacotes(N, 'A - Origem - ', 'C - Destino -', 'B - Auxiliar -')


