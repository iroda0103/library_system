const Admin = require("./Admin");

const listAdmin = async (query = {}) => {
  const { q, sort, filters, page = { limit: 3, offset: 0 } } = query;

  const filter = {};
  const sorted = {};

  if (q) {
    filter[`$or`] = [
      { username: { $regex: new RegExp(q, "i") } },
      { full_name: { $regex: new RegExp(q, "i") } },
    ];
  }

  if (sort) {
    sorted[`${sort.by}`] = sort.order;
  }

  if (filters) {
    if (filters.is_deleted) {
      filters.is_deleted = filters.is_deleted == "true" ? true : false;
    }

    if (filters.is_super) {
      filters.is_super = filters.is_super == "true" ? true : false;
    }
  }

  const resultsPromise = Admin.find({ ...filter, ...filters })
    .sort(sorted)
    .select("-password");

  const countPromise = Admin.countDocuments({ ...filter, ...filters });

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

module.exports = listAdmin;
