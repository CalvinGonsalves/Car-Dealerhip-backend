var express = require('express');
var app = express();
const path = require('path');
const sessions = require("client-sessions");
var mongoose= require("mongoose");
var cors = require('cors');
// var routes1 = require('./routes/api/login');
var routes2 = require('./routes/api/car');
var routes3 = require('./routes/api/buycar');
var routes4 = require('./routes/api/buycarsession');
var routes5 = require('./routes/api/contactapi');
const bodyParser = require('body-parser');


var indexRoutes = require('./routes/api/newm');
const PORT = 3000;
mongoose.connect("mongodb://127.0.0.1:27017/local");

app.set('view engine','ejs');
// app.use((req,res,next) =>{
//     res.locals.current_user = req.session.user;
//     next()

// })

// app.use('/' , routes);
// app.use(express.static(path.join(__dirname,'views')));
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended: false}));
// app.use(sessions({
//     cookieName: "session",
//     secret: "abc1234abc",
//     duration:30*60*1000,
// }));
app.use(cors());
// app.use((req,res,next) =>{

//     // console.log(req.session.user);
//     res.locals.current_user = req.session.user;
//     next()

// })
app.use(express.json());
// app.use('/api/login',routes1);
app.use('/api/car',routes2);
app.use('/api/buycar',routes3);
app.use('/api/buycarsession',routes4);
app.use('/api/contact',routes5);
app.use(indexRoutes);

// app.get("/out",(req,res) =>
// {
//        console.log("logout"); 
//     req.session.destroy();
//     res.redirect("register.html");
// })

app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`);
});