var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var AccidentSchema = new Schema({
  repaired: Boolean,
  cost: Number,
  updated_at: { 
    type: Date
  },
  created_at: { 
    type: Date
  }
});

AccidentSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

// This creates our model from the above schema, using mongoose's model method
var Accident = mongoose.model("Accident", AccidentSchema);

// Export the Note model
module.exports = Accident;

