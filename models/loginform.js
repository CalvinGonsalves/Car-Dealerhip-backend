let mongoose = require('mongoose')

let loginSchema = new mongoose.Schema( {
    Firstname: String,
    Lastname: String,
    username: String,
    Phone: String,
    email : String,
    psw : String,
    // Security: String,
    // Answer: String,
    
})

module.exports = mongoose.model('loginModel',loginSchema);