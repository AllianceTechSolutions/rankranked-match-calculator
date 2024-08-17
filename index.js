// O módulo 'readline' permite a leitura de entrada de texto de uma maneira síncrona e é usado 
// para receber entradas de linha de comando do usuário.
const readline = require('readline');

// Configura o 'readline' para ler a entrada do usuário no terminal, criando uma interface de leitura.
const rl = readline.createInterface({
    input: process.stdin,  // Define a entrada como o terminal (stdin)
    output: process.stdout // Define a saída como o terminal (stdout)
});

// Função que solicita ao usuário as vitórias e derrotas, e calcula o nível baseado no saldo de vitórias.
function getVictoryLevel() {
    // Exibe uma pergunta ao usuário para obter a quantidade de vitórias
    rl.question("Digite a quantidade de vitórias: ", (victoriesInput) => {
        // Converte a resposta (que é uma string) para um número inteiro
        const victories = parseInt(victoriesInput);

        // Exibe uma pergunta ao usuário para obter a quantidade de derrotas
        rl.question("Digite a quantidade de derrotas: ", (defeatsInput) => {
            // Converte a resposta para um número inteiro
            const defeats = parseInt(defeatsInput);

            // Calcula o saldo de vitórias subtraindo as derrotas das vitórias
            const victoryBalance = victories - defeats;
            let level;

            // Determina o nível com base no saldo de vitórias
            if (victoryBalance < 10) {
                level = "Ferro"; // Nível 'Ferro' para saldo de vitórias menor que 10
            } else if (victoryBalance >= 11 && victoryBalance <= 20) {
                level = "Bronze"; // Nível 'Bronze' para saldo entre 11 e 20
            } else if (victoryBalance >= 21 && victoryBalance <= 50) {
                level = "Prata"; // Nível 'Prata' para saldo entre 21 e 50
            } else if (victoryBalance >= 51 && victoryBalance <= 80) {
                level = "Ouro"; // Nível 'Ouro' para saldo entre 51 e 80
            } else if (victoryBalance >= 81 && victoryBalance <= 90) {
                level = "Diamante"; // Nível 'Diamante' para saldo entre 81 e 90
            } else if (victoryBalance >= 91 && victoryBalance <= 100) {
                level = "Lendário"; // Nível 'Lendário' para saldo entre 91 e 100
            } else {
                level = "Imortal"; // Nível 'Imortal' para saldo maior que 100
            }

            // Exibe a mensagem com o saldo de vitórias e o nível determinado
            console.log(`O Herói tem um saldo de ${victoryBalance} e está no nível de ${level}`);

            // Fecha a interface de leitura 'readline', encerrando o processo de entrada/saída
            rl.close();
        });
    });
}

// Chama a função 'getVictoryLevel' para iniciar o processo de solicitação de dados e cálculo do nível
getVictoryLevel();
