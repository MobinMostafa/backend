const express = require('express');
const dotenv = require('dotenv');
// dot env config
dotenv.config();

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');

const app = express();

// const users = [
//   { id: 1, name: "John Doe", email: "john.doe@example.com", address: "123 Main St, NY" },
//   { id: 2, name: "Jane Smith", email: "jane.smith@example.com", address: "456 Elm St, CA" },
//   { id: 3, name: "Michael Johnson", email: "michael.johnson@example.com", address: "789 Oak St, TX" },
//   { id: 4, name: "Emily Davis", email: "emily.davis@example.com", address: "321 Pine St, FL" },
//   { id: 5, name: "Daniel Martinez", email: "daniel.martinez@example.com", address: "654 Maple St, WA" },
//   { id: 6, name: "Sophia Brown", email: "sophia.brown@example.com", address: "987 Birch St, CO" },
//   { id: 7, name: "James Wilson", email: "james.wilson@example.com", address: "741 Cedar St, IL" },
//   { id: 8, name: "Olivia Taylor", email: "olivia.taylor@example.com", address: "852 Spruce St, NV" },
//   { id: 9, name: "William Anderson", email: "william.anderson@example.com", address: "963 Redwood St, AZ" },
//   { id: 10, name: "Charlotte Thomas", email: "charlotte.thomas@example.com", address: "159 Willow St, OR" }
// ];



// middleware 

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;




const uri = process.env.DB_URI;
// console.log(uri)

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
   const database = client.db("userDb");
   const userCollection = database.collection("users");


   app.get('/users', async (req,res) => {
    const results = await userCollection.find().toArray();
    res.send(results);
  })

    app.post('/users', async (req,res) => {
    const newUser = req.body;
    const results = userCollection.insertOne(newUser);
    res.send(results);
 
    // console.log(newUser);
})

// delete user 
     app.delete('/users/:id', async (req,res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const results = await userCollection.deleteOne(query);
      res.send(results);
    })

   // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);  
  }
} 

run()










// console.log(users);



app.get('/', (req,res) => {
    res.send('Hello World!')
})

// app.get('/users', (req,res) => {
//     res.send(results);
// })

// app.post('/users', (req,res) => {
//     const user = req.body;
//     user.id = users.length + 1;
//     users.push(user);
//     res.send(user);
//     console.log(user);
// })


app.listen(port, () => console.log(`Server is running on ${port}`))