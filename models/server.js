const express = require("express");
const cors = require("cors");
const { dbConection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    //Conectar a DB
    this.conectarDB();

    //Middlewares
    this.middlewares();

    //Routes

    this.routes();
  }

  async conectarDB() {
    await dbConection();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Body Parser
    this.app.use(express.json());

    //public directoy
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo en puerto:", this.port);
    });
  }
}

module.exports = Server;
