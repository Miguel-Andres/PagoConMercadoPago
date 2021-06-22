
const express = require("express")

const router = express.Router()
const productsApiController = require("../../controllers/api/productsControllers")


router.get("/",productsApiController.list)


router.post("/checkout",productsApiController.pagar)




module.exports = router