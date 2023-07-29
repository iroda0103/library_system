const mongoose = require('mongoose');
const Admin=require('../modules/admins/Admin')
const bcryptjs=require('bcryptjs')




// module.exports = function (){
//     return  mongoose.connection.dropDatabase()
//     .then(() => {
//       console.log('Database dropped successfully');
//       // Perform any additional setup or initialization tasks here
//     })
//     .catch((error) => {
//       console.error('Error dropping database:', error);
//     });
// }


module.exports = function (){
    return  mongoose
    .connect('mongodb://127.0.0.1:27017/db_name', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=>{
            console.log('MongoDB databazasiga ulandi');
        })
        .catch((error)=>{
            console.log('Databazada xatolik' ,err);
        })
}

// Admin.deleteMany({})
//   .then(() => {
//     console.log('All data deleted successfully');
//   })
//   .catch((error) => {
//     console.error('Error deleting data:', error);
//   });

// const seedAdmins=[
//   {
//     full_name:'Iroda Muminova',
//     username:'iroda3242',
//     password:bcryptjs.hashSync('1234'),
//     is_super:true
//   },
//   {
//     full_name:'Nurbek Muminov',
//     username:'nurbek3242',
//     password:bcryptjs.hashSync('1234'),
//   },
//   {
//     full_name:'Ra\'no Muminova',
//     username:'ra\'no3242',
//     password:bcryptjs.hashSync('1234'),
//   }

// ]

// const seedDB=async ()=>{
//   await Admin.deleteMany({});
//   await Admin.insertMany(seedAdmins)
// }

// seedDB().then(()=>{
//   mongoose.connection.close();
// })