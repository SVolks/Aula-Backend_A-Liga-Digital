const express = require('express')
const { soma } = require ('./funcoes')
//const {Carro, Passageiro} = require ('./funcoes')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    //let carro = new Carro()
    //let passageiro = new Passageiro()

    res.send('Bem Vindo!')
})

app.get('/soma', (req, res) => {
    consulta = req.query;
    console.log(req.query);
    res.send('Soma: '+soma(consulta.a, consulta.b));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})