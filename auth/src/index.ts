import express from "express"
import {json} from 'body-parser'

const app = express();
app.use(json()); 

app.get("/api/users/currentuser",(req,res)=>
{ 
res.send("What's up")
})


app.listen(3000,()=>
{
  console.log("listen on 3000");
})