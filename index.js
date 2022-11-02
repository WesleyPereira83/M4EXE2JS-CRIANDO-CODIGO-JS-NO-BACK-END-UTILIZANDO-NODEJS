const { response } = require("express");
const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem vindo ao meu app");
    //Rotas -> são os caminhos para a aplicação
    //Esta rota "/" é a principal do site.
    //a função(requisição, resposta) que está sendo utilizada é chamada de função de 'callback'
});

app.get("/pessoas", function(req, res){
    res.send("Bem-vindo ao meu blog");
    //Com essa nova rota o sistema mostra um resultado diferente, é só digitar na url: localhost/blog
    //Quando o usuário digita uma rota diferente na Barra de endereço do navegador tem-se um resultado diferente.
});

app.get("/sobre", function(req, res){
    res.send("Página sobre minha vida!");
    //Com essa nova rota o sistema mostra um resultado diferente, é só digitar na Barra de endereço do navegador: localhost/sobre
});

app.get("/ola/:cargo/:nome", function(req, res){
    res.send("Teste parâmetros");
    //Nesta rota foi usado parâmetros, é só digitar na Barra de endereço do navegador: localhost/ola/programador/wesley
});

app.get("/oi/:profissao/:nome", function(req, res){
    res.send(req.params);
    //Nesta rota foi usado parâmetros, é só digitar na Barra de endereço do navegador: localhost/ola/programador/wesley
});

app.listen(8081, function(){
    console.log("Servidor rodando... na url: localhost:8081");
});