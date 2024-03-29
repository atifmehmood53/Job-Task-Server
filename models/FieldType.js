var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let validTypes = require("./allowedTypes");

var typeSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  type:{
    type: String,
    enum: validTypes,
    required: true,
  }
});

const FieldType = mongoose.model("FieldType", typeSchema);
module.exports = FieldType;
