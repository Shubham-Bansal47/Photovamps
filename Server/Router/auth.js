const express=require("express");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const router=express.Router();

const User=require('../Model/userSchema');



router.get('/',(req,res)=>{
    res.send("Perfectly running auth");
});   

router.post('/register',async (req,res)=>{
    
    const {name,email,phone,work,skill,password,cpassword}=req.body;
    
    if(!name || !email || !phone || !work || !skill || !password || !cpassword){
        return res.json({message:"please fill the fields properly",status:422});
    }

    try{
        const userexist=await User.findOne({email:email});
        if(userexist){
            return res.json({message:"User Already Registered With this Email",status:420});
        }
 
        const user=new User({name, email, phone, work, skill, password, cpassword});
        const newuser=await user.save();
        if(newuser){
            return res.json({message:"User registered successfully",status:200});
        }else{
            return res.json({message:"error registering"});
        }
    }catch(err){   
        console.log(err);
    }


    //Through Promises
    // User.findOne({email:email})
    // .then((userexist)=>
    // {
    //     if(userexist)
    //     {
    //         res.status(422).json({error:"Email already registered"});
    //     }
    //     const user=new User({name, email, phone, work, password, cpassword});
    //     user.save()
    //     .then(()=> res.status(201).json({message:" User registered successfully "}))
    //     .catch((err)=> res.status(500).json({error:"Registration failed"}));
    // })
    // .catch((err)=> console.log(err));
});

router.post('/signin',async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.json({message:"Fill properly",status:400});
        }
        const check=await User.findOne({email:email});
        if(check){
            const match= await bcrypt.compare(password,check.password);
            const token= await check.generateAuthToken();
            if(match){
                return res.json({message:"User matched",data_received:check,status:200});
            }
            else{
                return res.json({message:"Invalid Credentials",status:406});
            }
        }
        else{
            return res.json({message:"Register First",status:402});
        }        

    }catch(err){
        console.log(err);
    }
});

// router.get('/mongodatafetch', (req,res)=>{
//     try{
//         const data1 = User.find(
//             (err,data) =>
//             {
//                 if(err)
//                     res.json({message:"Unable to fetch data",status:500});
//                 else
//                     res.json({message:"data succesfully sent",status:203}).send(data);
//             });
//     }catch(error){
//         console.log("Catch: ",error);
//     }
// });

router.get('/mongodatafetch', (req, res) => {
    User.find((err, data) => {
            if(err) return res.json({message:"task failed!", status:503});
            else return res.json({message:"data retrieved successful", data_received: data, status:203});
        }
    );
});

module.exports=router;