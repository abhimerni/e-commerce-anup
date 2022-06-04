const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique:true },
    desc: { type: String, required: true },
    user:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    category:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
