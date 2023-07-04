const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountSchema = new Schema({
  user: String,
});

const accountModel = mongoose.model("accounts", accountSchema);

module.exports = accountModel;
