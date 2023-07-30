const { NotFoundError } = require("../../shared/errors");
const Loan = require("./Loan");
const Book=require('../books/Book')

const returnLoan = async (id) => {
  const existing = await Loan.findOne({ _id: id });

  if (!existing) {
    throw new NotFoundError("Not Found");
  }

  const result = Loan.findByIdAndUpdate(
    id,
    { returned_date: Date.now() },
    { new: true }
  )

  const book = await Book.findOne({ _id: existing.book });

  const bookChange = await Book.findByIdAndUpdate(
    existing.book,
    { number_of_leased: book.number_of_leased - 1 },
    { new: true }
  ).select("-is_deleted");

  console.log(bookChange);

  return result;
};

module.exports = returnLoan;
