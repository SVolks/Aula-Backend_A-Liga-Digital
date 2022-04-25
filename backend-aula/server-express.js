const express = require('express');
const app = express();
const port = 3000;

// GET, POST, PUT, DELETE = TIPOS DE REQUISIÇÃO. 
//GET É A REQUISIÇÃO PADRÃO DO NAVEGADOR.
//POST É PARA ENVIAR UMA INFORMAÇÃO/SALVAR UM ITEM NO SERVIDOR. 
//PUT É PARA ATUALIZAR. 
//DELETE PARA REMOVER.

// PARA EFETUAR A PESQUISA DEVE-SE COLOCAR: localhost:3000/hello?nome=ste(qlquer nome)
app.get ('/hello', (req, res) => {
    const nome = req.query.nome;
    const sobrenome = req.query.sobrenome || ':D'; //Nesse caso o 'ou/||' serve para caso não haja um sobrenome nao aparecer o undefined, ao inves disso aparecera isso -> :D, mas tbm da para deixa vazia -> '' aí n aparecera nd
    res.send(`Hello ${nome} ${sobrenome}!`);    
});

//app.get ('/hello', (req, res) => {
//res.send(`Hello ${req.query.nome}!`);
//});

app.get ('/bye', (req, res) => {
    res.send('Até a próxima!');
});

const lista = [
    aluno = {
        nome: 'Tiago dos Santos',
        disciplina: 'Matemática',
        notas: [6.5, 4.3, 2.1, 6.2]
    },
    aluno = {
        nome: 'Tiago Barro',
        disciplina: 'Matemática',
        notas: [6.5, 4.3, 2.1, 6.2]
    },
    aluno = {
        nome: 'Alex Carneiro',
        disciplina: 'Matemática',
        notas: [7.5, 8.3, 9.1, 10.0]
    },
    aluno = {
        nome: 'Alexandre Carneiro',
        disciplina: 'Matemática',
        notas: [7.5, 8.3, 9.1, 10.0]
    }
];

app.get('/aluno/:numeroAluno', (req, res) => {
    const aluno = lista[req.params.numeroAluno - 1];
    res.send(aluno);
});

app.get('/busca', (req, res) => {
    const termoBusca = req.query.nome.toLowerCase();
    let resultados = [];

    for (let i=0;i<lista.length;i++) {
        if(lista[i].nome.toLowerCase().includes(termoBusca)) {
            resultados.push(lista[i]);
        }
    }
    if (resultados.length == 0) {
        return res.status(404).send('Aluno não encontrado');
    }
    return res.send(resultados);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});






//app.get ('/hello/:nome/:sobrenome', (req, res) => {
//    res.send(`Hello ${req.params.nome} ${req.params.sobrenome}!`);
    // SEND É EQUIVALENTE AO END
//});


// EXEMPLOS DO EXPRESSJS.COM/PT-BR/GUIDE/ROUTING.HTML
//app.get ('/carro/:id', (req, res) => {
    //    res.send(`Traga o carro (de id/identificacao tal) ${req.params.id}!`);
    //});
    //app.use('/birds', birds);