const Admin=require('./Admin')
const bcryptjs=require('bcryptjs')

const addAdmin=async(data)=>{
    const hashedPassword = await bcryptjs.hash(data.password, 10);

    const result = await Admin.create({
      ...data,
      password: hashedPassword,
    });

    const { password, is_deleted, ...rest } = result.toObject();

    return rest;
}

module.exports=addAdmin