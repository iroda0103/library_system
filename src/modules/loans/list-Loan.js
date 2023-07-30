const Loan = require("./Loan");

const listLoan = async (query = {}) => {
  const {sort, filters, page = { limit: 3, offset: 0 } } = query;

  const filter = {};
  const sorted = {};

  if (sort) {
    sorted[`${sort.by}`] = sort.order;
  }

  const resultsPromise = Loan.find({ ...filter, ...filters }).sort(sorted);

  const countPromise = Loan.countDocuments({ ...filter, ...filters });

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

module.exports = listLoan;
