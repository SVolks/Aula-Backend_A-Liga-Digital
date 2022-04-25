const express = require('express');
const app = express();
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));8

const calculos = require ('./calctermos');

app.get('/:termo', (req, res) => {
    const termo = req.params.termo;
    const a1 = parseInt(req.query.a);
    const b1 = parseInt(req.query.b);

    if(isNaN(a1) && isNaN(b1)) {
        res.send(`Coloque o primeiro e o segundo número, dessa forma: http://localhost:3001/${termo}?a=N&b=N; substitua os 'N's pelo número desejado! ;D`)
    } else if (isNaN(a1)) {
        res.send(`Coloque o primeiro número, a consulta deve ficar assim: http://localhost:3001/${termo}?a=N&b=${b1}; substitua o 'N' pelo número desejado! ;D`)
    } else if (isNaN(b1)) {
        res.send(`Coloque o segundo número, a consulta deve ficar assim: http://localhost:3001/${termo}?a=${a1}&b=N; substitua o 'N' pelo número desejado! ;D`)
    } else {
        const resultado = calculos.calcular(termo, a1, b1);
        res.send(resultado)
    }
});

app.post('/calculos', (req, res) => {
    const obj = req.body;
    if(obj.a1===undefined || obj.b1===undefined || obj.termo===undefined ){
        res.send(`Requisição errada. Siga o exemplo: { "a1": 12, "b1": 12, "termo": "+" }`);
    } else{
        const resultado = calculos.calcular(obj.termo,obj.a1, obj.b1);
        res.send(resultado);
    }
});

app.get('', (req, res) => {
    res.send("Seja bem-vindo! Para que possamos começar a calcular para GET favor utilizar um dos seguintes termos: some, subt, div, mult, porcen, elev; e para POST utilize um dos seguintes símbolos: +, -, /, *, %, ^. Certifique-se que sua consulta ficará dessa forma: http://localhost:3001/TERMO?a=N&b=N, onde deve-se substituir 'TERMO' por um dos termos apresentados anteriormente e substitua os 'N's pelo número desejado! :D ");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});