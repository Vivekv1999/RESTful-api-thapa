const express = require('express');
const MensRanking = require('../models/mens')
const router = new express.Router();

const multer = require("multer")
const path = require("path");

const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({
    storage: storage
})



// //we will handle post req
router.post('/mens', upload.single('profile'), async (req, res) => {
    console.log(req.file)
    try {
        const addingMenRecord = new MensRanking(
            {name: req.body.name, 
            ranking: req.body.ranking,
            dob: req.body.dob,
            country: req.body.country,
            score: req.body.score
            // image: req.file.path
        }
            // req.body
        )
        console.log(req.body,"rightttttttttttt");

        const inserMens = await addingMenRecord.save()
        res.status(201).send(inserMens)
    } catch (e) {
        res.status(400).send(e)
    }
})

// //we will handle get req-----read data
// ////////find({})---->.sort({"ranking" :1})  ------>ranking na adhar esort thay jase
router.get('/mens', async (req, res) => {
    try {
        const getMen = await MensRanking.find({}).sort({ "ranking": 1 })
        console.log(getMen);
        res.status(201).send(getMen)
    } catch (e) {
        res.status(400).send(e)
    }
})

// // get individual data 
// router.get('/mens/:id', async (req, res) => {
//     try {
//         const _id = req.params.id
//         const getMennn = await MensRanking.findById(_id)
//         console.log(getMennn);
//         res.status(201).send(getMennn)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// // patch individual data update
// router.patch('/mens/:id', async (req, res) => {
//     try {
//         const _id = req.params.id
//         const getMen3 = await MensRanking.findByIdAndUpdate(_id, req.body, { new: true })
//         console.log(getMen3);
//         res.status(201).send(getMen3)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// // delete individual data update
// router.delete('/mens/:id', async (req, res) => {
//     try {
//         // const _id = req.params.id
//         const getMen4 = await MensRanking.findByIdAndDelete(req.params.id)
//         console.log(getMen3);
//         res.status(201).send(getMen4)
//     } catch (e) {
//         res.status(500).send(e)
//     }
// })


module.exports = router
