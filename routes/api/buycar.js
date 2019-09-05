const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');


var carModel = require('../../models/carmodels')
const db = mongoose.connect('mongodb://127.0.0.1:27017/local');


router.get("/buycar",(req,res)=>{
    res.render("buycars");
});

//Update car model info
router.post('/', function(req, res){
    
   
    carModel.updateOne({modelname: req.body.modelname},{$set: {isSold:"true"}}).then(function(result)
        { 
            res.json(result);
        }).catch(function(err){
            console.error(err);
        })
      

       
    });



module.exports = router;