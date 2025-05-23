const express  = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// dot env config
dotenv.config();

const { MongoClient, ServerApiVersion} = require('mongodb');

const app = express();


// middleware 

app.use(cors());
app.use(express.json());


const port = process.env.PORT || 5000;
const uri = process.env.DB_URI;

// mongodb connection 

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





// route 

app.get('/', (req,res) => {
    res.send('Hello World!')
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})