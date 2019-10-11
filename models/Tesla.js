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
});

// This creates our model from the above schema, using mongoose's model method
const Tesla = mongoose.model("Tesla", TeslaSchema);

// Export the Article model
module.exports = Tesla;
