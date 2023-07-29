const { NotFoundError } = require("../../shared/errors");
const Admin = require("./Admin");

const showAdmin = async (id) => {
  const existing = await Admin.findOne({ _id: id, is_deleted: false }).select(
    "-password"
  );

  if (!existing) {
    throw new NotFoundError("Not Found");
  }

  return existing;
};

module.exports = showAdmin;
