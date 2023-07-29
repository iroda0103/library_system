const { NotFoundError } = require("../../shared/errors");
const Publisher = require("./Publisher");

const showPublisher = async (id) => {
  const existing = await Publisher.findOne({ _id: id });

  if (!existing) {
    throw new NotFoundError("Not Found");
  }

  return existing;
};

module.exports = showPublisher;
