const mongoose = require('mongoose')

const URL =`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.sowwj.mongodb.net/booksmanagement?retryWrites=true&w=majority`;
let connection = mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

module.exports = connection;