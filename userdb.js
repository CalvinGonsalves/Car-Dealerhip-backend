var mongoose = require ("mongoose"); // The reason for this demo.
var loginModel = require('./models/loginform')

mongoose.connect('mongodb://127.0.0.1:27017/local');

var users =[
    //Users
    new loginModel({
        Firstname: "Alice",
        Lastname: "Bailey",
        username: "alicebailey",
        Phone: "1234",
        email : "alice@bailey.com",
        psw : "qwerty",
        // Security: ,
        // Answer: String,
        
    }), 
    new loginModel({
        Firstname: "Johnny",
        Lastname: "Haris",
        username: "johnnyharis",
        Phone: "4321",
        email : "johnny@haris.com",
        psw : "qwerty1234",
        // Security: ,
        // Answer: String,
        
    }), 
    new loginModel({
        Firstname: "Calvin",
        Lastname: "Gonsalves",
        username: "calvingonsalves",
        Phone: "123456789",
        email : "calvin@gonsalves.com",
        psw : "qwerty4321",
        // Security: ,
        // Answer: String,
        
    }), 

]

var done = 0;
for (var i =0 ; i< users.length; i++){
    users[i].save(function(err,result){
        done++;
        if (done === users.length){
            exit();
        }
    }); 
}


function exit() {
    mongoose.disconnect();
}