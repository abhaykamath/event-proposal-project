const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const proposalSchema = new Schema({
  vendor: { type: Schema.Types.ObjectId, ref: "accounts" },
  even_name: { type: String, required: true },
  event_place: { type: String, required: true },
  proposal_type: { type: String, required: true },
  event_type: { type: String, required: true },
  budget: { type: String, required: true },
  event_from_date: { type: String },
  event_to_date: { type: String },
  description: { type: String },
  food_prefs: { type: String },
  events: { type: String },
});

const proposalModel = mongoose.model("proposals", proposalSchema);

module.exports = proposalModel;
