const express = require("express")
const data = require("../../data/data.json")
const mercadopago = require("mercadopago")



const  productsControllers  = {

    list : (req,res)=>{

        let products={
            meta :{
                status :200,
                statusText : "ok aqui tienes los productos de prueba",
                url :"api/products",
                length : data.length,
               
            } ,
          data : data
        }

        res.json(products)
           
    },

    pagar: (req,res)=>{
           
      let preference = {
         items: [
           {
             title: req.body.name ,
             unit_price: req.body.price,
             quantity: 1 ,
           },
          
         ]
       };    
          mercadopago.preferences.create(preference)
          .then(response =>  {         
             
            // or Redirect o send  ???
           res.json(response.body.init_point)
         console.log()
         
          })
         .catch(err=>console.log(err));       
 
     },
    
    
}

module.exports = productsControllers