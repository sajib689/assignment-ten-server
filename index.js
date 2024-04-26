const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())


app.get('/', async (req, res) => {
    res.send('Welcome the Sajib server')
})

app.listen(port, () => {
    console.log(`ami tor bap server ${port}`)
})