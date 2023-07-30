const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    publisher: {
      type: mongoose.SchemaTypes.ObjectId,
      ref:'Publisher',
      required: true,
    },
    author: {
      type: mongoose.SchemaTypes.ObjectId,
      ref:'Author',
      required: true,
    },
    copies: {
      type: mongoose.SchemaTypes.Number,
      default: 1,
    },
    is_deleted: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
    number_of_leased:{
      type:mongoose.SchemaTypes.Number,
      default:0
    }
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
