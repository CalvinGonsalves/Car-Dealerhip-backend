var contactModel = require("../../models/contactmodel");
const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const db = mongoose.connect('mongodb://127.0.0.1:27017/local');





//get Contact form
router.get('/', function (req,res){


    console.log('contact');
    contactModel.find().then((doc)=>{
        res.json(doc);
        console.log(doc);

    }).catch((err)=>{
        console.log(err);
        
    });

})



//CREATE contact model info
router.post('/', function(req, res){
   

   
    var contact = new contactModel({
        Firstname : req.body.Firstname,
        Lastname : req.body.Lastname,
        Email : req.body.Email,
        Phone : req.body.Phone,
        Message: req.body.Message
       
    });

    //SAVE car USING MONGOOSE
    contact.save().then(function(result){
        console.log(result);
        res.send(result);
    }).catch(function(err){
        console.log(err);
        res.send(err);
    });
});

module.exports = router;