//IMPORTAR LIB
const express = require("express");
const path = require("path");
const pages = require('./pages.js')
    //INICIANDO O EXPRESS
const server = express();
// UTILIZANDO OS ARQUIVOS ESTÁTICOS
server.use(express.static("public"))
    //CONFIGURAR TEMPLATE ENGINE
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    //CRIAR UMA ROTA
server.get("/", pages.index)
server.get("/orphanage", pages.orphanage)
server.get("/orphanages", pages.orphanages)
server.get("/create-orphanage", pages.createOrphanage)

// LIGAR O SERVIDOR
server.listen(5500);



//iniciar servidor:
//npm start- http://127.0.0.1:5500/