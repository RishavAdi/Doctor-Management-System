 const mongoose=require('mongoose');

 const userSchema=new mongoose.Schema({
    name:{
        type: 'string',
        required:[true,'name is required']
    },
    email:{
        type: 'string',
        required:[true,'email is required']
    },
    password:{
        type: 'string',
        required:[true,'password is required']
    }

 })

 const userModel=mongoose.model('Adi',userSchema)
 module.exports=userModel