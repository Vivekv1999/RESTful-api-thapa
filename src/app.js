const express = require("express")
require("../src/db/conn")
// const MensRanking = require("../src/models/mens");   ------badho kacharo app.js mma lakha to tayare kam nu hatu aaa
const router = require("./routers/mens");


const app = express()

const port = process.env.PORT || 3000;

app.use(express.json())                 //json data avo te console am ana thi batay --permisson ape json fromat ni

app.use(router)
// app.get("/",async(req,res)=>{
//     res.send("hello from thapa")
// })


app.listen(port, () => {
    console.log(`connection is live at ${port}`);
})


// const express = require('express')
// const multer = require("multer")
// const app=express()
// const path=require("path")