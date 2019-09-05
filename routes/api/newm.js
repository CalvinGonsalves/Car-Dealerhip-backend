
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
var loginModel = require("../../models/loginform");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/',function(req,res){  //route to home page
    res.render('project');
});
router.get('/users', function (req,res){



    loginModel.find().then((doc)=>{
        res.json(doc);

    }).catch((err)=>{
        console.log(err);
        
    });

})
//registration
router.get("/register",(req,res)=>{
    res.render("register");
});

//handling registration
router.post("/register",(req,res)=>{

    if (req.body.email)
    loginModel.findOne({email: req.body.email},(err,user)=>{


        if(user)
        {
            console.log("User Already Exists");
            res.json({message: "A User with the same email already exists"})
        }

        else {


    var newUser = new loginModel ({
        username: req.body.username,
        email: req.body.email,
        psw: req.body.psw,
        // Security: req.body.Security,
        // Answer: req.body.answer
    

    });


  //SAVE ADDRESS USING MONGOOSE
    newUser.save().then(function(result){
        console.log(result);
        res.json({message: "Register Success"})
        // res.redirect("/");
        // return res.status(201).json(result);
        
       
    }).catch(function(err){
        console.log(err);
        res.send(err);
        // return res.status(501).json({message: 'Error registering user'})
    });

}
});
});


//get/logout
router.get("/logout",function(req,res){
    // req.session.destroy();
    // res.redirect("/");
    //return res.status(200).send();
    console.log("logged out")
})


router.post('/users',function(req,res){
    console.log("updated");
    
    loginModel.updateOne({email: req.body.email},{$set: {psw:req.body.psw,Firstname:req.body.Firstname,Lastname:req.body.Lastname,Phone:req.body.Phone}}).then(function(result)
    {
        res.json(result);
    }).catch(function(err){
        console.error(err);
    })
    

})

//show login form

router.get("/login",(req,res)=>{
    res.render("login");
})
//handling login session
router.post("/login", (req,res) =>{

    // console.log("Over here");
    if (req.body.email)
    loginModel.findOne({email: req.body.email},(err,user)=>{

        if(!user)
        {
            console.log("User not Found");
            res.json({message: "The Email has not been registered"})
        }
       
        
        // console.log(user.psw);
        else if (err || req.body.psw !== user.psw) {
            // res.render("login",{error: "incorrect email/password"});
            console.log("error");
            res.json({message: "Invalid Login details1"});

        }else{

            let token = jwt.sign({Firstname:user.Firstname,Lastname:user.Lastname,Phone:user.Phone,email:user.email,password:user.psw,username:user.username},'secret',{expiresIn:'3h'});
            console.log("login success");
            res.json({token:token});
            
        // req.session.user = user;  //user info stored
        // app.set('ses',req.session);
        // res.redirect("/");

       

        // window.onload=function(){
        // document.getElementById("demo1").innerHTML = "Welcome" + user.email;   
        // }
         }
    });
});



module.exports = router;

