const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');


var carModel = require('../../models/carmodels')
const db = mongoose.connect('mongodb://127.0.0.1:27017/local');
var multer = require('multer');

var storage = multer.diskStorage (
    {
        destination: './views/views/',
        filename : function (req, file, cb ) {

            

            cb(null, file.originalname);
        }
    }

);

var upload = multer({dest: 'views/', storage: storage});




//DELETE

// router.delete('/delete/:modelname',function(req,res){
//     console.log('del')
//     carModel.deleteOne({modelname: req.params.modelname}).then(function(result){
//         res.json({message : 'Deleted'})
//         }).catch(function(err){
//             console.log(err);;
//     });
// })
//DELETE

router.get('/delete/:_id',function(req,res){
    console.log('del')
    carModel.deleteOne({_id: req.params._id}).then(function(result){
        res.json({message : 'Deleted'})
        }).catch(function(err){
            console.log(err);;
    });
})


//GET car info
router.get('/Make/:Make', function(req, res){
    console.log(req.params.Make);
    carModel.find({ "Make" : {$regex : `^.*${req.params.Make}.*$`}}).then(function(result){
        res.json(result);
    }).catch(function(err){
        console.error(err);
    })
})

router.get('/used', function(req, res){
    // console.log(req.params.modelname);
    carModel.find({Status: "Used"}).then(function(result){
        res.json(result);
    }).catch(function(err){
        console.error(err);
    })
})

router.get('/', function (req,res){


    console.log('hello1');
    carModel.find().then((doc)=>{
        res.json(doc);
        // console.log(doc);

    }).catch((err)=>{
        console.log(err);
        
    });

})

// router.get('/purchased/:modelname',function(req,res){
//     carModel.updateMany({modelname: req.params.modelname},{$set: {isSold:"true"}}).then(function(result)
//     {
//         res.json(result);
//     }).catch(function(err){
//         console.error(err);
//     })
    

// })

router.get('/purchased/:modelname',function(req,res){
    carModel.updateMany({modelname: req.params.modelname},{$set: {Engine:"V8"}}).then(function(result)
    {
        res.json(result);
    }).catch(function(err){
        console.error(err);
    })
    

})


//CREATE car model info
router.post('/',upload.single('file'), function(req, res){
   
console.log(req.file.originalname);
console.log(req.body);

   
    var car = new carModel({
        Make: req.body.make,
        modelname : req.body.modelname,
        price : req.body.price,
        Engine : req.body.engine,
        // isSold : req.body.status,
        imagepath : "/views/" + req.file.originalname,
        year : req.body.year,
        Status : req.body.status
       

       
    });

    //SAVE car USING MONGOOSE
    car.save().then(function(result){
        console.log(result);
        res.send(result);
    }).catch(function(err){
        console.log(err);
        res.send(err);
    });
});

module.exports = router;