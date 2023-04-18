const express = require("express");
const router = express.Router();
const {getSingleLocationData} =require("../controllers/droughtControllers")

router.route("/:lat&:lon").get(getSingleLocationData);

module.exports = router;