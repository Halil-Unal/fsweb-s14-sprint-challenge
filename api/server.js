// serverı buraya yazın ve index.js require yazın
const express = require("express");
const projectrouter =require("./project/router")
const server = express();

server.use(express.json());
server.use("/projects",projectrouter);

server.get('/', (req, res) => {
    res.send(`<h2>Biraz ara yazılım yazalım!</h2>`);
  });

module.exports = server;