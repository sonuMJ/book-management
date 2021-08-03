require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbconnection = require('./config/dbconnection')
const bookRoutes = require('./routes/bookRoutes')

const port = process.env.PORT || 5000;
const app = express();
var corsOptions = {
    origin: 'http://localhost:3000'
  }

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use("/api/books", bookRoutes)

dbconnection.then((data,err) => {
    if(err){
        console.log("failed to connect database");
    }else{
        app.listen(port, () => {console.log(`Application running at ${port}`);})
    }
})







