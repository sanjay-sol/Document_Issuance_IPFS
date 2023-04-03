const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const adduser = new mongoose.Schema({
    filename:{
        type: String,
        required :true
    },
    hash:{
        type: String,
        required :true
    }
})

// registeruser.pre('save', async function (next){
//     console.log("Hashing User Data with bcrypt....");
//     if(this.isModified('password')){
//         this.password = await bcrypt.hash(this.password , 12)
//         this.confirmpassword = await bcrypt.hash(this.confirmpassword , 12)

//     }
//     next();
// })


module.exports = mongoose.model("adduser" , adduser)