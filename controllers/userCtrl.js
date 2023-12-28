const userModel=require('../models/userModel')
const bcrypt=require('bcryptjs')

//register callback
const registerController=async(req,res)=>{
    try{
        const existingUser=await userModel.findOne({email:req.body.email})
        if(existingUser){
            return res.status(200).send({message:`User Already Exist`,sucess:false})
        }
        const password = req.body.password;
        if (!password) {
            return res.status(400).send({ message: `Password is required`, success: false });
        }
        const salt = await bcrypt.genSalt(10);
        if (!salt) {
            return res.status(500).send({ message: `Error generating salt`, success: false });
        }

        const hashedPassword = await bcrypt.hash(password, salt);
        if (!hashedPassword) {
            return res.status(500).send({ message: `Error hashing password`, success: false });
        }
        req.body.password = hashedPassword
        const newUser=new userModel(req.body)
        await newUser.save()
        res.status(201).send({message:`Register Sucessfully`,sucess:true})
    }catch(error){
        console.log(error)
        res.status(500).send({sucess:false,message:`Register controller ${error.message}`})
    }
}
const loginController=()=>{}


module.exports={loginController, registerController}