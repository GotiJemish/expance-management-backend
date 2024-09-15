
const mongoose =require('mongoose');
const colors = require('colors');

const conn = async () => {
 try {
    await mongoose.connect(process.env.DB);
   //  console.log(colors.green('server running on' + mongoo   se.connect(process.env.host)));
    const { host, name } = mongoose.connection;
  console.log(colors.green('server running on ', name));
 } catch (error) {
    console.log(colors.red.underline(error))
 }
}

module.exports =conn 
