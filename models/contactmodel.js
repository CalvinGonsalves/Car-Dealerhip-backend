let mongoose = require('mongoose')

let contactmodelSchema = new mongoose.Schema( {
  Firstname: String,
  Lastname: String,
  Email: String,
  Phone: String,
  Message: String 
})

module.exports = mongoose.model('contactmodels',contactmodelSchema);