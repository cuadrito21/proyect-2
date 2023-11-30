const { getAll, create, remove, update,getForId} = require('../controllers/Proyect.controllers');
const express = require('express');

const proyectRouter = express.Router();

proyectRouter.route("/") //proyects
		.get(getAll)
		.post(create);
		
proyectRouter.route("/:id")
.delete(remove)
.get(getForId)
.put(update);
module.exports = proyectRouter;