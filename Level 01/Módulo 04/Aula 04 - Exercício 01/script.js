nomeCompleto = "João Baptista Reis"
apelido = "João"
idade = 37
dataNascimento = "05/07/1985"
localNascimento = "Porto Alegre/RS"
altura = 1.82
trabalhando = true

apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecido[a] como " + apelido + ") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " + (trabalhando ? "empregado" : "desempregado") + "."

console.log(apresentacao)