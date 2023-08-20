const express = require('express')
const client = require('../backend/mongo')
const router = express.Router()
router.get('/insert/:key/:value',async (req,res)=>{
    console.log("inserting")
    const {key,value} = req.params
    await client.connect()
    const db = client.db("rfc")
    const collection = await db.collection(key).insertOne({value})
    await client.close()
    res.send("sent")
})
module.exports = router