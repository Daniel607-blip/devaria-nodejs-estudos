const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout // Corrigido de 'stout' para 'stdout'
});

let leituraDeCampo;

readLine.question('Por favor, digite alguma coisa: ', input => {
    leituraDeCampo = input;
    console.log(`O usuário digitou: ${leituraDeCampo}`);
    readLine.close(); // Fecha a interface após a leitura
});
