const express = require('express')
const client = require('../backend/mongo')
const router = express.Router()
router.get('/get/:key',async (req,res)=>{
    console.log("inserting")
    const {key} = req.params
    await client.connect()
    const db = client.db("rfc")
    let collection = await db.collection(key).find({}).toArray()
    collection = collection[0]
    collection = collection['value']
    console.log(collection)
    await client.close()
    res.send({value:collection})
})
module.exports = router