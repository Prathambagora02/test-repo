// import express from 'express';

// const app = express();
// function ageChecker(req , res , next) {
//     if (!req.query.age) {
//         res.send("you can not access this page")
//     } else {
//        next(); 
//     }
// }
// app.use(ageChecker)

// app.get("/" , (req , res)=>{
//   res.send("<h1>Home page invoked</h1>")
// })
// app.get("/about" , (req , res)=>{
//   res.send("<h1>about page invoked</h1>")
// })
// app.get("/login" , (req , res)=>{
//   res.send("<h1> login page invoked</h1>")
// })

// app.listen(8081);



import express from 'express';
import { MongoClient } from 'mongodb';
const dbname = "school"
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);
 async function dbConnection() {
    await client.connect();
    const db = client.db(dbname);
    const collection = db.collection(dbname);
    const result = await collection.find().toArray();
    console.log(result);
    
 }
 dbConnection();
const app = express();
app.listen(4200);