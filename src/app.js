const express = require("express")
require("../src/db/conn")
// const MensRanking = require("../src/models/mens");   
// // -------===------badho kacharo app.js mma lakha to tayare kam nu hatu aaa
const router = require("./routers/mens");
const app = express()



const port = process.env.PORT || 3000;
app.use(express.json())                 //json data avo te console am ana thi batay --permisson ape json fromat ni
app.use('/profile',express.static('upload/images'))  //path batavava mate image no 
app.use(router)
app.get("/",async(req,res)=>{
    res.send("hello from thapa")
})


app.listen(port, () => {
    console.log(`connection is live at ${port}`);
})


// ======================== thapa ==================================================
// ======================== thapa ==================================================
// ======================== thapa ===================
// const express = require('express')
// const multer = require("multer")
// const app = express()
// // const path = require("path")

// const port = process.env.PORT || 3000;

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, "uploads")
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "-" + Date.now() + ".jpg")
//         }
//     })
// }).single('user_file');

// app.post('/upload',(req,resp)=>{
//     resp.send("file upload")
// })

// app.listen(port,()=>{
//     console.log('connection is live ');
// })


// =================================================================================
// ======================================== original   image    =========================================
// =================================================================================
// const express = require('express')
// const app = express();
// const multer = require("multer")
// const path = require("path");

// // //storage engine
// const storage = multer.diskStorage({
//     destination: "./upload/images",
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({
//     storage: storage
// })
// app.use('/profile',express.static('upload/images'))

// //multiple file hot ot ahitya aray avat
// app.post("/upload", upload.single('profile'), (req, res) => {
//     console.log(req.file); //we get file req from multer
//     res.json({
//         sucess:1,
//         profile_url:`http://localhost:4000/profile/${req.file.filename}`
//     })
// })


// // app.use(router)
// app.listen(4000, () => {
//     console.log('server is up and running');
// })

