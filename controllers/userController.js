const db = require("../dbConnect/mongoDb");
const collections =require('../dbConnect/Collections')
const jwt= require('jsonwebtoken')



module.exports ={
    signup:(req,res,next)=>{
        let user = {
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password
         }
        return new Promise((resolve,reject)=>{
            db.get()
            .collection(collections.USER)
            .insertOne(user).then((resp)=>{
                console.log("user added");
            })

        })
       
    },

login:async(req,res,next)=>{
let user = await db.get().collection(collections.USER)
.findOne({email:req.body.email,password:req.body.password})
console.log(user)
if(user){
let username=user.name
let password=user.password
console.log(user)
res.json({task:true})
res.send("log in success")
let token =jwt.sign(user,"secret",{expiresIn:86000})
res.status(200).send({auth:true,token:token})
//    jwt.sign(user,process.env.ACCESS_TOCKEN_SECRET)
}else{

}
    



    }


    
}



