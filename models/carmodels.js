let mongoose = require('mongoose')

let carmodelSchema = new mongoose.Schema( {
    
    modelname : String,
    price : Number,
    Engine : String,
    isSold : Boolean,
    imagepath : String,
    Make : String,
    Status : String,
    year: String
})

module.exports = mongoose.model('carmodels',carmodelSchema);