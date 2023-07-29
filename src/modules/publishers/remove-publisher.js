const { NotFoundError } = require("../../shared/errors");
const Publisher = require("./Publisher");

const removePublisher = async (id) => {
  const existing = await Publisher.findOne({ _id: id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Not Found");
  }

  const result = Publisher.findByIdAndUpdate(
    id,
    { is_deleted: true },
    { new: true }
  );

  return result;
};

module.exports = removePublisher;
