var express = require('express');
var router = express.Router();
const userController =require('../controllers/userController')

const db=require('../dbConnect/mongoDb')


router.post('/signup',userController.signup)

router.post('/login',userController.login)




module.exports = router;
