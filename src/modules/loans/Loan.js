const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema(
  {
    book: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Book",
      required: true,
    },
    out_date: {
      type: mongoose.SchemaTypes.Date,
      required:true
    },
    due_date: {
      type: mongoose.SchemaTypes.Date,
      required: true,
    },
    returned_date: {
      type: mongoose.SchemaTypes.Date,
      default:null
    },
    admin: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Admin",
      required: true,
    },
    borrower: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Borrower",
      required: true,
    },
    is_deleted: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

const Loan = mongoose.model("Loan", loanSchema);

module.exports = Loan;
