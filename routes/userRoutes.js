const express = require('express');
const {loginController,registerController}=require('../controllers/userCtrl')


//router object
const router=express.Router()

//routes
//login||Post
router.post('/login',loginController)

//Register||Post
router.post('/register',registerController)
module.exports =router