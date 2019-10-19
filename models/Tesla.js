var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var TeslaSchema = new Schema({

  model: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  imageURL: {
    type: String,
    required: true,
    default: "http://blog.logomyway.com/wp-content/uploads/2019/06/tesla-logo.jpg"
  }
});

// This creates our model from the above schema, using mongoose's model method
const Tesla = mongoose.model("Tesla", TeslaSchema);

// Export the Article model
module.exports = Tesla;
