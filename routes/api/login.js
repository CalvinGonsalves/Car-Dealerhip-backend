const express = require('express');
const router = express.Router();
// var mongoose = require('mongoose');
// const sessions = require("client-sessions");

var loginModel = require('../../models/loginform')
// const db = mongoose.connect('mongodb://127.0.0.1:27017/local');


// router.use(sessions({
//     cookieName: "session",
//     secret: "abc1234abc",
//     duration:30*60*1000,
// }));
//GET login info
router.get('/:email', function(req, res){
    loginModel.find({email: req.params.email}).then(function(result){
        res.json(result);
    }).catch(function(err){
        console.error(err);
    })
})


router.get('/', function (req,res){



    loginModel.find().then((doc)=>{
        res.render("register");
        console.log('jhvjhvjhv');
        

    }).catch((err)=>{
        console.log(err);
        
    });

})
//CREATE login info
// router.post('/', function(req, res){
//     //CREATE login USING FORM DATA
//     var login = new loginModel({
//         email: req.body.email,
//         psw: req.body.psw,
//         Security: req.body.Security,
//         Answer: req.body.answer

       
//     });

//     //SAVE ADDRESS USING MONGOOSE
//     login.save().then(function(result){
//         console.log(result);
//         res.redirect("/carmodel.html")
       
//     }).catch(function(err){
//         console.log(err);
//         res.send(err);
//     });
// });

router.get("/out",(req,res) =>{
    console.log("logout"); 
 req.session.destroy();
 res.render("register");
})

 
router.post("/", (req,res) =>{

    console.log("Over here");
    loginModel.findOne({email: req.body.email},(err,user)=>{
        if (err || req.body.psw !== user.psw) {
            res.send("Invalid password");
        }
        req.session.user = user;
        // app.set('ses',req.session);
        res.redirect("/project.html");
    })
})



module.exports = router;