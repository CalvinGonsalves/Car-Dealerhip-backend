const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var loginModel = require('../../models/loginform')

const db = mongoose.connect('mongodb://127.0.0.1:27017/local');


router.get("/",(req,res,next)=> {
    console.log("true");
    console.log(req.session.user);
    if (!(req.session && req.session.user)) {
        
        return res.redirect("/register");
    }
    else {
    loginModel.findById(req.session.user,(err, user)=> {
        if (err) {
            return next (err);

        }
        if (!user) {
            return res.redirect("/register")
        }
        console.log(req.session.user.email);
       res.redirect("/buycars");

    });
    }
});

router.get("/buycar",(req,res)=>{
    res.render("buycars");
});
module.exports = router;