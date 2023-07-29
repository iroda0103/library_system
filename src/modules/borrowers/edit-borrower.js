const { NotFoundError } = require("../../shared/errors");
const Borrower = require("./Borrower");

const editBorrower = async ({ id, ...changes }) => {
  const existing = await Borrower.findOne({ _id: id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Not Found");
  }

  const result = Borrower.findByIdAndUpdate(id, changes, { new: true }).select(
    "-is_deleted"
  );

  return result;
};

module.exports = editBorrower;
