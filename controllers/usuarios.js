const { response } = require("express");

const usuariosGet = (req, res = response) => {
  const {q, nombre, apikey, page = 1, limit} = req.query;

  res.json({
    msg: "get API - controlador",
    q,
    nombre,
    apikey,
    page,
    limit
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "post API - controlador",
    nombre,
    edad,
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API - controlador",
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API - controlador",
  });
};

const usuariosPut = (req, res = response) => {
  const id = req.params.id;

  res.json({
    msg: "put API - controlador",
    id,
  });
};
module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
  usuariosPost,
};
