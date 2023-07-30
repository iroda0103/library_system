const { NotFoundError } = require("../../shared/errors");
const Author = require("../authors/Author");
const Publisher = require("../publishers/Publisher");
const Book = require("./Book");

const editBook = async ({ id, ...changes }) => {
  const existing = await Book.findOne({ _id: id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Not Found");
  }

  if (changes.author) {
    const author = await Author.findOne({ _id: changes.author });

    if (!author) {
      throw new NotFoundError("Author Not Found");
    }
  }

  if (changes.publisher) {
    const publisher = await Publisher.findOne({ _id: changes.publisher });

    if (!publisher) {
      throw new NotFoundError("Publisher Not Found");
    }
  }

  const result = Book.findByIdAndUpdate(id, changes, { new: true }).select(
    "-is_deleted"
  );

  return result;
};

module.exports = editBook;
