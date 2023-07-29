const { NotFoundError } = require("../../shared/errors");
const Admin = require("./Admin");

const editAdmin = async ({id,...changes}) => {
  const existing=await Admin.findOne({_id:id})

  if(!existing){
    throw new NotFoundError('Not Found')
  }

  const result= Admin.findByIdAndUpdate(id, changes, { new: true }).select(
    "-password -is_deleted"
  );

  return result
};

module.exports = editAdmin;
