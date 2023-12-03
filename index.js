const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const { root, insert, reterive } = require('./routes/routes')
const { post } = require('./routes/postimage')
const app = express()
app.use(bodyparser())
app.use(cors())
app.use(root)
app.use(insert)
app.use(reterive)
app.use(post)
app.listen(3003,()=>console.log('server started'))