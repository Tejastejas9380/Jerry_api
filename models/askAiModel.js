const mongoose = require("mongoose");

const aiSchema = mongoose.Schema({
  requst: {
    type: String,
    require: [true, "Input prompt is required"],
  },
  body: {
    type: String,
    require: [true, "Bad request, Try again"],
  },
});

module.exports = mongoose.model("Aitxt", aiSchema);
