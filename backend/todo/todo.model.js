const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gradeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userID: {
      type: Schema.Types.ObjectId,
      ref: "AllUser",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("todo", gradeSchema);
