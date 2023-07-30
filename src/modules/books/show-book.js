const { NotFoundError } = require("../../shared/errors");
const Book = require("./Book");

const showBook = async (id) => {
  const existing = await Book.findOne({ _id: id })
  .populate('author','-is_deleted')
  .populate('publisher','-is_deleted')

  if (!existing) {
    throw new NotFoundError("Not Found");
  }

  return existing;
};

module.exports = showBook;
