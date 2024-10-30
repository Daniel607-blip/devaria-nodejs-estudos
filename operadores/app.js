const readLine = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout
});

readLine.question('Qual o ano do seu nascimento?', ano => {
    if(ano > 2004){
        console.log('voce nao tem 18 anos')
        return; // nao quer continuar o algoritmo?
    }else{
        readLine.question("voce tem habilitacao (sim/nao)" ,  temHabilitacao =>{
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('voce nao tem habilitacao para entrar no kart')
            }else{
                readLine.question("Qual seu nome? ", nome =>{
                    switch(nome){
                        case 'Douglas':
                            console.log('bem vindo ao kart Douglas')
                            break;
                        case 'Rafael':
                            console.log('bem vindo ao kart Douglas')
                            break;
                        default:
                            console.log('seu nome nao esta na lista')
                    }
                })
            }
        })
    }
})