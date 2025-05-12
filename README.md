<p align="center">
  <img src="https://attachments.gupy.io/production/companies/519/career/574/images/logo.png" alt="Target Logo" style="width:150px;">
</p>

<p align="center">
  <b><i>💻 | Minha solução para os Desafios de Programação em Node.js e JavaScript</i></b><br>
</p>

<p align="center">
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/Mew/TargetSistemasChallenge?color=054DFC" />
  <img alt="Main language" src="https://img.shields.io/github/languages/top/Mew/TargetSistemasChallenge?color=054DFC"/>
  <img alt="License" src="https://img.shields.io/github/license/Mew/TargetSistemasChallenge?color=054DFC"/>
</p>

## Sumário

1. [Desafio](#desafio)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Dados de Exemplo (`dados.json`)](#dados-de-exemplo-dadosjson)
4. [Como Executar](#como-executar)
   * [Pré‑requisitos](#pré-requisitos)
   * [Passo a Passo](#passo-a-passo)
5. [Funcionalidades Detalhadas](#funcionalidades-detalhadas)
6. [Contato](#contato)
7. [Licença](#licença)

## Desafio

Este repositório contém soluções para os seguintes exercícios:

1. **Soma de Números**  
   **Enunciado:**  
   > Observe o trecho de código abaixo:
   > ```c
   > int INDICE = 13, SOMA = 0, K = 0;
   > Enquanto K < INDICE faça { 
   >     K = K + 1; 
   >     SOMA = SOMA + K; 
   > }
   > Imprimir(SOMA);
   > ```
   > Ao final do processamento, qual será o valor da variável `SOMA`?  
   **Resposta Esperada:** `91`

2. **Sequência de Fibonacci**  
   **Enunciado:**  
   > Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores  
   > (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),  
   > escreva um programa que, informado um número, retorne uma mensagem avisando se o número informado pertence à sequência.  
   **Exemplo:**  
   - Entrada: `21`
   - Resposta Esperada: `"O número 21 pertence à sequência de Fibonacci."`

3. **Análise do Faturamento Diário**  
   **Enunciado:**  
   > Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa que retorne:
   > - O menor valor de faturamento ocorrido em um dia do mês (desconsiderando dias com faturamento zero);
   > - O maior valor de faturamento ocorrido em um dia do mês;
   > - O número de dias no mês em que o faturamento diário foi superior à média mensal (calculada apenas entre dias com faturamento).  
   **Resposta Esperada (com base no exemplo de dados fornecido):**  
   - Menor valor: `373.7838`
   - Maior valor: `48924.2448`
   - Dias com faturamento acima da média: `10`

4. **Percentual de Faturamento por Estado**  
   **Enunciado:**  
   > Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
   > - SP – R$67.836,43  
   > - RJ – R$36.678,66  
   > - MG – R$29.229,88  
   > - ES – R$27.165,48  
   > - Outros – R$19.849,53  
   > Escreva um programa que calcule o percentual de representação que cada estado teve dentro do faturamento total mensal.  
   **Resposta Esperada (com base nos dados acima):**  
   - SP: `37.53%`
   - RJ: `20.29%`
   - MG: `16.17%`
   - ES: `15.03%`
   - Outros: `10.98%`

5. **Inversão de String**  
   **Enunciado:**  
   > Escreva um programa que inverta os caracteres de uma string sem usar funções prontas como `reverse()`.  
   **Exemplo:**  
   - Entrada: `"Target Sistemas"`
   - Resposta Esperada:  
     - String original: `"Target Sistemas"`  
     - String invertida: `"sametsiS tegraT"`

## Estrutura do Projeto

- **`challenge.json`**  
  Script principal em JavaScript que lê os dados do arquivo `dados.json` e executa todos os desafios, imprimindo os resultados no console.

- **`dados.json`**  
  Arquivo contendo os dados de entrada necessários para os desafios:
  - `indice`: Número para a soma (ex.: 13).
  - `fibonacciNumero`: Número a testar na sequência de Fibonacci (ex.: 21).
  - `faturamentoDiario`: Array de objetos, cada um representando o dia e o faturamento daquele dia.
  - `faturamentoEstados`: Objeto com o faturamento mensal detalhado por estado.
  - `stringParaInverter`: A string que deverá ser invertida (ex.: `"Target Sistemas"`).

## Dados de Exemplo (`dados.json`)

Um exemplo de arquivo `dados.json`:

```json
{
  "indice": 13,
  "fibonacciNumero": 21,
  "faturamentoDiario": [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
  ],
  "faturamentoEstados": {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  },
  "stringParaInverter": "Target Sistemas"
}
```

## Como Executar

### Pré‑requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)

### Passo a Passo

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Mew/TargetSistemasChallenge.git
   cd TargetSistemasChallenge
   ```

2. **Verifique o `dados.json`**  
   Certifique-se de que o arquivo `dados.json` está presente e contém os dados de entrada conforme o exemplo acima.

3. **Execute o script**

   ```bash
   node challenge.json
   ```

   Os resultados de cada desafio serão exibidos no console.

## Funcionalidades Detalhadas

### 1. Soma de 1 até o Índice

- **Lógica:**  
  O código itera de `k = 1` até `k = indice`, acumulando a soma em cada iteração.  
- **Resposta:**  
  Para `indice = 13`, a soma é `91`.

### 2. Verificação da Sequência de Fibonacci

- **Lógica:**  
  A função gera números da sequência de Fibonacci até encontrar ou ultrapassar o número informado.  
- **Resposta:**  
  Para `fibonacciNumero = 21`, o programa confirma que `21` pertence à sequência de Fibonacci.

### 3. Análise do Faturamento Diário

- **Lógica:**  
  - Filtra os dias com faturamento maior que zero;  
  - Calcula o menor e o maior valor dentre os dias válidos;  
  - Calcula a média (somente dos dias com faturamento) e conta quantos dias ficaram acima desta média.
- **Resposta:**  
  Com os dados disponíveis, espera-se que:
  - Menor valor: `373.7838`
  - Maior valor: `48924.2448`
  - Dias com faturamento acima da média: `10`

### 4. Percentual de Faturamento por Estado

- **Lógica:**  
  Calcula o faturamento total somando os valores de cada estado e, em seguida, determina o percentual de cada um usando a fórmula:  
  `(valor do estado / total faturado) * 100`
- **Resposta:**  
  Os cálculos geram os seguintes percentuais:
  - SP: `37.53%`
  - RJ: `20.29%`
  - MG: `16.17%`
  - ES: `15.03%`
  - Outros: `10.98%`

### 5. Inversão de String

- **Lógica:**  
  Percorre a string de trás para frente, concatenando cada caractere para formar a string invertida, sem uso de funções prontas como `reverse()`.
- **Resposta:**  
  Para a string `"Target Sistemas"`, a saída é:
  - String original: `"Target Sistemas"`
  - String invertida: `"sametsiS tegraT"`

## Contato

Desenvolvido com muito ☕ por [Larissa Cristina Benedito](https://linktr.ee/mewmewdevart)

## Licença

Este projeto está licenciado conforme os termos do arquivo [LICENSE](LICENSE).


