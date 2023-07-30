const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

const removeAuthor = async (id) => {
  const existing = await Author.findOne({ _id: id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Not Found");
  }

  const result = Author.findByIdAndUpdate(
    id,
    { is_deleted: true },
    { new: true }
  );

  return result;
};

module.exports = removeAuthor;
