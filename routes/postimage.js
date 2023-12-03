const express = require('express')
const axios = require('axios')
const router = express.Router()
router.post('/post',(req,res)=>{
    const {clientID,sourceImage,targetImage} = req.body
    const body = {clientID,sourceImage,targetImage}
    axios.post('http://129.151.159.104:443/postPhoto',body).then(r=>res.send(r.data)).catch(e=>res.send(e))
    //res.send('Welcome')
})
module.exports = router