const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Olá mundo estou funcionando!'});
})

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Sou o brabo'});
})

app.listen(3001, () => {
    console.log("Api rodando na porta 3001")
})
