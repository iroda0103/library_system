const mongoose = require("mongoose");
const Admin = require("../modules/admins/Admin");
const Borrower = require("../modules/borrowers/Borrower");
const Author = require("../modules/authors/Author");
const Publisher = require("../modules/publishers/Publisher");
const Book = require("../modules/books/Book");
const Loan = require("../modules/loans/Loan");
const bcryptjs = require("bcryptjs");
const {
  seedAdmins,
  seedAuthors,
  seedBooks,
  seedBorrowers,
  seedPublishers,
} = require("./seed");

module.exports = function () {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/db_name", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB databazasiga ulandi");
    })
    .catch((error) => {
      console.log("Databazada xatolik", err);
    });
};

// const deleteManyModel =async () => {
//     await Admin.deleteMany({});
//     await Borrower.deleteMany({});
//     await Publisher.deleteMany({});
//     await Author.deleteMany({});
//   await Book.deleteMany({});

// };

// deleteManyModel().then(() => {
//   mongoose.connection.close();
// });

