const mongoose = require('mongoose');

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
