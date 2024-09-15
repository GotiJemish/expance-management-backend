const express=require('express');


const {registercontroller, logincontroller } = require('../controller/usercontrol');

//router obj
const router=express.Router();
//routers
//login
router.post('/login',logincontroller)

//register
router.post('/register',registercontroller)


//export
module.exports=router


