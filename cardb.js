var mongoose = require ("mongoose"); // The reason for this demo.
var carModel = require('./models/carmodels')

mongoose.connect('mongodb://127.0.0.1:27017/local');


var cars =[
    //Toyota
    new carModel({
        Make: "Toyota",
        modelname : "Camry",
        price : 35000,
        imagepath : "/views/usedtoyota.jpg",
        Status: "New",
        year: 2005,
        Engine: "V6"
    }), 

    new carModel({
        
        Make: "Toyota",
        modelname : "Supra",
        price : 36000,
        imagepath : "/views/toyota.jpg",
        Status: "Used",
        year: 2018,
        Engine: "V8 turbo"
    }), 

    //BMW

    new carModel({
        Make: "BMW",
        modelname : "M3",
        price : 40000,
        imagepath : "/views/bmw.jpg",
        Status: "New",
        year: "2016",
        Engine: "V8"
    }), 

    new carModel({
        brand: "BMW",
        modelname : "X5",
        price : 43000,
        imagepath : "/views/usedbmw.jpg",
       Status: "Used",
       year: "2010",
       Engine: "VV"
    }), 

     //Nissan

     new carModel({
        Make: "Nissan",
        modelname : "Altima",
        price : 40000,
        imagepath : "/views/usednissan.jpg",
        Status: "Used",
        year: "2010",
        Engine: "V4"
    }), 

    new carModel({
        Make: "Nissan",
        modelname : "350Z",
        price : 44000,
        imagepath : "/views/nissan.jpg",
        Status: "New",
        year: "2017",
        Engine: "V8"
    }), 

    //New cars
    new carModel({
        Make: "Dodge",
        modelname : "Challenger GT",
        price : 44000,
        imagepath : "/views/dodgeGT1.jpg",
        Status: "New",
        year: "2017",
        Engine: "V8"
    }), 
    new carModel({
        Make: "Chevrolet",
        modelname : "Corvette",
        price : 44000,
        imagepath : "/views/Corvette.png",
        Status: "New",
        year: "2017",
        Engine: "V10"
    }), 
    new carModel({
        Make: "McLaren",
        modelname : "P1",
        price : 64000,
        imagepath : "/views/McLaren.png",
        Status: "New",
        year: "2016",
        Engine: "V12"
    }), 
    new carModel({
        Make: "McLaren",
        modelname : "P1",
        price : 64000,
        imagepath : "/views/McLaren.png",
        Status: "New",
        year: "2016",
        Engine: "V12"
    }), 
]

var done = 0;
for (var i =0 ; i< cars.length; i++){
    cars[i].save(function(err,result){
        done++;
        if (done === cars.length){
            exit();
        }
    }); 
}


function exit() {
    mongoose.disconnect();
}
