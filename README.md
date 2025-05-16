# JavaScript - Problemas de Algoritmos

Este repositório contém soluções e explicações para diversos problemas de algoritmos, incluindo Recursão, Backtracking e Programação Dinâmica. Cada problema aborda cenários do mundo real e demonstra a aplicação de técnicas algorítmicas.

---

## 1. Recursão: Logística em Armazéns Automatizados

### Problema:
Um sistema robótico em um armazém de e-commerce precisa mover pacotes de uma estante (origem) para uma área de despacho (destino) utilizando uma estante auxiliar. As regras são:
- Apenas um pacote pode ser movido por vez.
- Pacotes maiores não podem ser colocados sobre pacotes menores.

### Tarefa:
Implemente um algoritmo recursivo que simule o movimento de `N` pacotes. Mostre o passo a passo do processo para `N = 3`.

---

## 2. Backtracking: Organização de Segurança em um Museu

### Problema:
Um museu precisa posicionar seguranças em diferentes salas (organizadas como um tabuleiro NxN) de forma que nenhum segurança consiga ver o outro. Cada segurança cobre:
- Toda a linha, coluna e diagonais da sala onde está posicionado.

### Tarefa:
Implemente um algoritmo baseado em backtracking para posicionar `N` seguranças em `N` salas sem conflitos. Apresente a solução para `N = 4` e mostre o estado final do museu como um tabuleiro.

---

## 3. Programação Dinâmica: Otimização de Espaço em um Drone de Entregas

### Problema:
Uma empresa de entregas precisa decidir quais pacotes carregar em um drone para uma viagem. O drone possui uma capacidade máxima de peso, e cada pacote tem um peso e um valor de prioridade. O objetivo é maximizar a prioridade total dos pacotes sem ultrapassar o limite de peso.

### Tarefa:
Dado o seguinte conjunto de pacotes:
- Pacote A: peso 2kg, prioridade 3
- Pacote B: peso 3kg, prioridade 4
- Pacote C: peso 4kg, prioridade 5
- Pacote D: peso 5kg, prioridade 8
- Capacidade do drone: 8kg

1. Construa a tabela de programação dinâmica (matriz de solução) para este problema.
2. Indique quais pacotes devem ser selecionados para atingir a prioridade máxima.
3. Determine o valor total de prioridade alcançado.

---

Cada problema é acompanhado de sua implementação e explicação detalhada nos arquivos correspondentes deste repositório.
