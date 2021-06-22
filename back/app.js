const express = require("express")
const app = express()
const indexRouter = require("./routes/index")
const productsRouter = require("./routes/api/products")
const path = require('path');



const cors = require("cors")


require("dotenv").config()

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
// Agrega credenciales Vendedor
mercadopago.configure({ 
 access_token: process.env.ACCESS_TOKEN_SELLER
});



  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.use(express.static("../front/build"));


app.use(cors())  
  app.use(express.json())

app.use("/",indexRouter)
app.use("/api/products",productsRouter)
  


app.listen('3000' , ()=>{
    console.log("Happy Hacking")
});