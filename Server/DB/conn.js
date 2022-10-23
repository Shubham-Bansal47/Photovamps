const mongoose=require("mongoose");
const url=process.env.DATABASE;

mongoose.connect(url,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{ console.log(err,"Failed") });