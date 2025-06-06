import express  from "express";
import mongoose from "mongoose";
import { getOriginalUrl, shortUrl } from "./Controllers/url.js";

const app = express();

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://@cluster0.ngluz7v.mongodb.net/",
    {dbName:"NodeTest"}
).then(()=> console.log("MongoDb Connected !!!"))
.catch((err)=>console.log(err))

//render ejs file 
app.get('/', (req,res)=>{
    res.render("index.ejs" , {shortUrl : null})
})

//shorting url logic 
app.post("/short",shortUrl);

//redirect to orignal url
app.get("/:shortCode",getOriginalUrl);

const port = 1000;
app.listen(port , ()=> console.log(`server is running on port ${port}`))
