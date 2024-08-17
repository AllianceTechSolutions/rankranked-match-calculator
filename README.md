# Calculadora de Partidas Rankeadas

![Ranked Calculator](https://i.pinimg.com/564x/20/89/48/2089481bdabd1c606e8728cfe18ec389.jpg)

Este projeto é uma calculadora de partidas ranqueadas desenvolvida em JavaScript, que classifica jogadores com base em seu saldo de vitórias e derrotas. O código utiliza variáveis, operadores, laços de repetição, estruturas de decisão e funções para determinar o nível do jogador.

## Conceitos Utilizados

1. **Variáveis**  
   As variáveis `victories` e `defeats` armazenam as vitórias e derrotas do jogador, respectivamente.

2. **Operadores**  
   O cálculo do saldo de vitórias é realizado usando operadores aritméticos (`-`).

3. **Laços de Repetição**  
   O loop de leitura de entrada do usuário utiliza o módulo `readline` para iterar sobre as entradas de vitórias e derrotas.

4. **Estruturas de Decisão**  
   As condições `if-else` determinam o nível do jogador com base no saldo de vitórias.

5. **Funções**  
   A função `getVictoryLevel` encapsula a lógica de leitura das entradas e cálculo do nível.

## Objetivo do Desafio

O objetivo do desafio é criar uma função que receba como parâmetros a quantidade de vitórias e derrotas de um jogador e, com base no saldo (vitórias - derrotas), determinar o nível do jogador conforme as faixas estabelecidas:

- Menor que 10 vitórias: **Ferro**
- Entre 11 e 20 vitórias: **Bronze**
- Entre 21 e 50 vitórias: **Prata**
- Entre 51 e 80 vitórias: **Ouro**
- Entre 81 e 90 vitórias: **Diamante**
- Entre 91 e 100 vitórias: **Lendário**
- Mais de 100 vitórias: **Imortal**

## Exemplo de Saída

```bash
O Herói tem um saldo de 15 e está no nível de Bronze
```

## Como Executar

1. Clone o repositório e navegue até a pasta do projeto.

2. Execute o programa em um ambiente Node.js.

3. Insira as perdas e derrotas quando solicitado.

4. O nível do herói será baseado no saldo de vitórias.

#### Divirta-se classificando seus heróis e explore as diferentes faixas de níveis! 🚀🦸‍♂️