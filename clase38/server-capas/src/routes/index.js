const { Router } = require("express");

const {
  getDatosController,
  postDatosController,
} = require("../controllers/datos.controller");

const routerDatos = new Router();

routerDatos.get("/", getDatosController);
routerDatos.post("/", postDatosController);

module.exports = routerDatos;