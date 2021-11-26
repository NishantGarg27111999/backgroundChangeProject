const express =require("express");
const path=require("path");
const app=express();
const port=Process.env.PORT ||5000;




const staticpath=path.join(__dirname,'public');

console.log(staticpath);


app.use(express.static(staticpath));


app.get("/",(req,res)=>{
   res.send('hello k hall h');
});

app.listen(port,()=>{
    console.log("application started successfully");
});
