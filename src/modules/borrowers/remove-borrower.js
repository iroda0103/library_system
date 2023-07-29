const { NotFoundError } = require("../../shared/errors");
const Borrower = require("./Borrower");

const removeBorrower = async (id) => {
  const existing = await Borrower.findOne({ _id: id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Not Found");
  }

  const result = Borrower.findByIdAndUpdate(
    id,
    { is_deleted: true },
    { new: true }
  )

  return result;
};

module.exports = removeBorrower;
