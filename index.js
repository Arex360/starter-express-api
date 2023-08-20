const express = require('express')
const cors = require('cors')
const { root, insert, reterive } = require('./api/routes/routes')
const app = express()

app.use(cors())
app.get('/',(req,res)=>{
    res.send("hello")
})
app.listen(3001,()=>console.log('server started'))