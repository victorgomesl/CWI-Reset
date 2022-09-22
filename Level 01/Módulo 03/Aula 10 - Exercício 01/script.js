colaboradores    = ['Glauber', 'João', 'Karine', 'Cleber', 'Maria', 'Henrique', 'Débora', 'Barbara']
idades           = [      69,          66,           58,      61,         60,          64,         59,         55]
temposDeTrabalho = [      31,          29,           30,      26,         25,          24,         26,         29]

function verificarAposentadoria(nome) {

    colaborador = false
    idade = 0
    tempoTrabalho = 0

    for (posicao = 0; posicao < colaboradores.length; posicao++) {

        if (nome == colaboradores[posicao]) {
            colaborador = true
            idade = idades[posicao]
            tempoTrabalho = temposDeTrabalho[posicao]
        }
    }

    if (colaborador) {
        
        porIdade = (idade >= 65)
        porTempoDeTrabalho = (tempoTrabalho >= 30)
        porIdadeComTempoDeTrabalho = (idade >= 60 && tempoTrabalho >= 25)

        if (porIdade || porTempoDeTrabalho || porIdadeComTempoDeTrabalho) {
            console.log("Parabéns, você já pode se aponsentar!")
        } else {
            console.log("Ainda não é possível se aposentar!")
        }
    
    } else {
        console.log("Colaborador inválido :|")
    }
}

verificarAposentadoria('Glauber')    // true (regra 3)
verificarAposentadoria('João')    // false (falta 1 ano de idade para regra 3)
verificarAposentadoria('Karine')      // true (todas)
verificarAposentadoria('Cleber')   // false (colaborador inexistente)
verificarAposentadoria('Maria')  // true (regra 2)
verificarAposentadoria('Henrique')   // false (falta 1 ano de idade para regra 1 e 1 de trabalho para regra 3)
verificarAposentadoria('Débora')   // true (regras 1 e 3)
verificarAposentadoria('Barbara')       // true (regra 3)
verificarAposentadoria('Felipe')    // false (falta 1 ano de trabalho para regra 2)
verificarAposentadoria('Julia') // false (colaborador inexistente)