const mongoose = require('mongoose');
const Admin=require('../modules/admins/Admin')
const Borrower=require('../modules/borrowers/Borrower')
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



// const seedBorrowers=[
//   {
//     full_name: 'John Doe',
//     address: '123 Main St',
//     phone: 1234567890,
//   },
//   {
//     full_name: 'Jane Smith',
//     address: '456 Elm St',
//     phone: 9876543210,
//   },
//   {
//     full_name: 'Bob Johnson',
//     address: '789 Oak St',
//     phone: 5555555555,
//   }

// ]

// const seedDB=async ()=>{
//     await Admin.deleteMany({});
//     await Borrower.deleteMany({});
//     await Admin.insertMany(seedAdmins)
//   await Borrower.insertMany(seedBorrowers)
// }

// seedDB().then(()=>{
//   mongoose.connection.close();
// })


