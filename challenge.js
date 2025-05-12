const fs = require('fs').promises;

// Função principal que realiza as operações
async function main() {
  try {
    const data = await fs.readFile('dados.json', 'utf8');
    const jsonData = JSON.parse(data);

    // =====================================================================
    // 1) Soma de 1 até INDICE (ex.: 13)
    // ---------------------------------------------------------------------
    // A variável 'indice' é lida do JSON e a soma dos inteiros de 1 até esse valor
    // é calculada percorrendo um loop.
    const indice = jsonData.indice;
    let soma = 0;
    for (let k = 1; k <= indice; k++) {
      soma += k;
    }
    console.log("1) Soma dos números de 1 até", indice, ":", soma);

    // =====================================================================
    // 2) Verificação se um número pertence à sequência de Fibonacci
    // ---------------------------------------------------------------------
    // Lê o número (ex.: 21) a ser testado, gera a sequência até ultrapassar ou
    // igualar o número e verifica se ele pertence à sequência.
    const numFibo = jsonData.fibonacciNumero;
    const isFibonacci = (n) => {
      if (n === 0) return true;
      let a = 0, b = 1;
      while (b < n) {
        const temp = b;
        b = a + b;
        a = temp;
      }
      return b === n;
    };

    if (isFibonacci(numFibo)) {
      console.log(`2) O número ${numFibo} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`2) O número ${numFibo} não pertence à sequência de Fibonacci.`);
    }

    // =====================================================================
    // 3) Processamento do Faturamento Diário
    // ---------------------------------------------------------------------
    // São calculados o menor e o maior faturamento (desconsiderando os dias com valor 0),
    // a média dos dias com faturamento e a contagem dos dias com faturamento superior à média.
    const faturamentoDiario = jsonData.faturamentoDiario;
    const faturamentosValidos = faturamentoDiario.filter(item => item.valor > 0);
    const valores = faturamentosValidos.map(item => item.valor);
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    const media = valores.reduce((total, valor) => total + valor, 0) / valores.length;
    const diasAcimaMedia = faturamentosValidos.filter(item => item.valor > media).length;

    console.log("\n3) Faturamento Diário:");
    console.log("   Menor valor:", menorValor);
    console.log("   Maior valor:", maiorValor);
    console.log("   Dias com faturamento acima da média:", diasAcimaMedia);

    // =====================================================================
    // 4) Percentual de Representação do Faturamento por Estado
    // ---------------------------------------------------------------------
    // Calcula o total do faturamento e o percentual de cada estado
    const faturamentoEstados = jsonData.faturamentoEstados;
    const totalFaturamentoEstados = Object.values(faturamentoEstados).reduce((total, valor) => total + valor, 0);

    console.log("\n4) Percentual de faturamento por estado:");
    for (const estado in faturamentoEstados) {
      const percentual = (faturamentoEstados[estado] / totalFaturamentoEstados) * 100;
      console.log(`   ${estado}: ${percentual.toFixed(2)}%`);
    }

    // =====================================================================
    // 5) Inverter os caracteres de uma string (sem usar reverse)
    // ---------------------------------------------------------------------
    // A string é lida do JSON (ex.: "Exemplo de string") e invertida percorrendo-a do final ao início.
    const stringOriginal = jsonData.stringParaInverter;
    let stringInvertida = "";
    for (let i = stringOriginal.length - 1; i >= 0; i--) {
      stringInvertida += stringOriginal[i];
    }

    console.log("\n5) Inversão de string:");
    console.log("   String original:", stringOriginal);
    console.log("   String invertida:", stringInvertida);

    // =====================================================================
    // Exibição do link do repositório no GitHub
    // ---------------------------------------------------------------------
    console.log("\nLink do repositório no GitHub: https://github.com/mewmewdevart/TargetSistemasChallenge");

  } catch (erro) {
    console.error("Erro ao ler ou processar o arquivo dados.json:", erro);
  }
}

// Execução da função principal
main();
