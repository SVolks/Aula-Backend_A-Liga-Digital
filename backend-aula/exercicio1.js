var lista = [
    aluno = {
        nome: 'Tiago dos Santos',
        disciplina: 'Matemática',
        notas: [6.5, 4.3, 2.1, 6.2]
    },
    aluno = {
        nome: 'Alex Carneiro',
        disciplina: 'Matemática',
        notas: [7.5, 8.3, 9.1, 10.0]
    }
];

for (let index = 0; index < lista.length; index++) {

    var aluno = lista[index];
    var somaDasNotas = 0;
    for (let iNota = 0; iNota < aluno.notas.length; iNota++) {
        somaDasNotas += aluno.notas[iNota];
    }
    var mediaAluno = somaDasNotas / 4;
    console.log(`Aluno: ${aluno.nome} - Disciplina: ${aluno.disciplina} - Média Final: ${mediaAluno} - Status: ${mediaAluno >= 6 ? "Aprovado" : "Reprovado"}`);
}