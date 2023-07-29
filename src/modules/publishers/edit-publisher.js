const { NotFoundError } = require("../../shared/errors");
const Publisher = require("./Publisher");

const editPublisher = async ({ id, ...changes }) => {
  const existing = await Publisher.findOne({ _id: id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Not Found");
  }

  const result = Publisher.findByIdAndUpdate(id, changes, { new: true }).select(
    "-is_deleted"
  );

  return result;
};

module.exports = editPublisher;
