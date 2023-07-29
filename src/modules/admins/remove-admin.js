const { NotFoundError } = require("../../shared/errors");
const Admin = require("./Admin");

const removeAdmin = async (id) => {
  const existing = await Admin.findOne({ _id: id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Not Found");
  }

  const result = Admin.findByIdAndUpdate(
    id,
    { is_deleted: true },
    { new: true }
  ).select("-password");

  return result;
};

module.exports = removeAdmin;
