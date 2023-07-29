const { NotFoundError } = require("../../shared/errors");
const Borrower = require("./Borrower");

const showBorrower = async (id) => {
  const existing = await Borrower.findOne({ _id: id });

  if (!existing) {
    throw new NotFoundError("Not Found");
  }

  return existing;
};

module.exports = showBorrower;
