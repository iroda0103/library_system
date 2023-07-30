const { NotFoundError } = require("../../shared/errors");
const Loan = require("./Loan");

const showLoan = async (id) => {
  const existing = await Loan.findOne({ _id: id })
  .populate('book','author publisher')
  .populate('admin','full_name')
  .populate('borrower','full_name')

  if (!existing) {
    throw new NotFoundError("Not Found");
  }

  return existing;
};

module.exports = showLoan;
