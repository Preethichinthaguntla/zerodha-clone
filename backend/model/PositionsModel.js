const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/PositionsSchema"); // Corrected import

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };
