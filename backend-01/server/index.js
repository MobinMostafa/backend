const express = require('express');
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;




const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com", address: "123 Main St, NY" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com", address: "456 Elm St, CA" },
  { id: 3, name: "Michael Johnson", email: "michael.johnson@example.com", address: "789 Oak St, TX" },
  { id: 4, name: "Emily Davis", email: "emily.davis@example.com", address: "321 Pine St, FL" },
  { id: 5, name: "Daniel Martinez", email: "daniel.martinez@example.com", address: "654 Maple St, WA" },
  { id: 6, name: "Sophia Brown", email: "sophia.brown@example.com", address: "987 Birch St, CO" },
  { id: 7, name: "James Wilson", email: "james.wilson@example.com", address: "741 Cedar St, IL" },
  { id: 8, name: "Olivia Taylor", email: "olivia.taylor@example.com", address: "852 Spruce St, NV" },
  { id: 9, name: "William Anderson", email: "william.anderson@example.com", address: "963 Redwood St, AZ" },
  { id: 10, name: "Charlotte Thomas", email: "charlotte.thomas@example.com", address: "159 Willow St, OR" }
];

// console.log(users);



app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.get('/users', (req,res) => {
    res.send(users)
})

app.post('/users', (req,res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
    console.log(user);
})


app.listen(port, () => console.log(`Server is running on ${port}`))