const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())




const uri = `mongodb+srv://${process.env.Db_user}:${process.env.Db_pass}@cluster0.2m0rny5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
   await client.connect();
   const spotCollection = await client.db('touristSpot').collection('spots')
     // email wise spot load
     app.get('/spots', async (req, res) => {
        const email = req.query.email;
        if(!email) {
          res.send([])
        } 
        const query = {email: email}
        const result = await spotCollection.find(query).toArray();
        res.send(result)
    })
   // get all spots
   app.get('/spots', async (req, res) => {
        const result = await spotCollection.find().toArray()
        res.send(result)
    })
    // get one spot details
    app.get('/spots/:id', async (req, res) => {
        const id = req.params.id
        const filter = {_id: new ObjectId(id)}
        const result = await spotCollection.findOne(filter)
        res.send(result)
    })
    // post spot 
    app.post('/spots', async (req, res) => {
        const query = req.body 
        const result = await spotCollection.insertOne(query)
        res.send(result)
    })
   
   await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
   // await client.close();
  }
}
run().catch(console.dir);


app.get('/', async (req, res) => {
    res.send('Welcome the Sajib server')
})

app.listen(port, () => {
    console.log(`ami tor bap server ${port}`)
})