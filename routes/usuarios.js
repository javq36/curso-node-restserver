const { Router } = require("express");

const {
  usuariosGet,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
  usuariosPost,
} = require("../controllers/usuarios");

const router = Router();

router.get("/", usuariosGet);

router.post("/", usuariosPost);

router.put('/:id', usuariosPut);

router.delete("/", usuariosDelete);

router.patch("/", usuariosPatch);

module.exports = router;
