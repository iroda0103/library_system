const Book = require("./Book");

const listBook = async (query = {}) => {
  // const response=await Book.find()

  const { q, sort, filters, page = { limit: 3, offset: 0 } } = query;

  const filter = {};
  const sorted = {};

  if (q) {
    filter[`$or`] = [{ title: { $regex: new RegExp(q, "i") } }];
  }

  if (sort) {
    sorted[`${sort.by}`] = sort.order;
  }

  if (filters) {
    if (filters.is_deleted) {
      filters.is_deleted = filters.is_deleted == "true" ? true : false;
    }
  }

  const resultsPromise = Book.find({ ...filter, ...filters }).sort(sorted);

  const countPromise = Book.countDocuments({ ...filter, ...filters });

  const [result, count] = await Promise.all([resultsPromise, countPromise]);

  const pageInfo = {
    total: count,
    totalPages: Math.ceil(count / page.limit),
    currentPage: Math.floor(page.offset / page.limit) + 1,
    hasNextPage: page.offset + page.limit < count,
    hasPreviousPage: page.offset > 0,
  };

  const response = {
    result,
    pageInfo,
  };

  return response;
};

module.exports = listBook;
