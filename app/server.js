const express = require("express");
const handleError = require("./middlewares/handleError");

const router = require("./router");

const server = express();
const port = process.env.PORT ?? 3000;

server.use(express.json());
server.use(express.static("./public"));
server.use(router);
server.use(handleError);

server.listen(port, () => {
  console.log(`Serveur lancé à l'adresse http://localhost:${port}`);
});
