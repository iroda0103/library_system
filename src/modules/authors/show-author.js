const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

const showAuthor = async (id) => {
  const existing = await Author.findOne({ _id: id });

  if (!existing) {
    throw new NotFoundError("Not Found");
  }

  return existing;
};

module.exports = showAuthor;
