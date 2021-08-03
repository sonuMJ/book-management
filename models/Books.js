const mongoose = require('mongoose')

const bookschema = mongoose.Schema({
    _id:{
        type:Number,
        required:true
    },
    title:{
        required:true,
        type:String
    },
    isbn:{
        type:String
    },
    pageCount:{
        required:true,
        type:Number
    },
    publishDate:{
        $date :{
            type:Date
        }
    },
    thumbnailUrl:{
        type:String
    },
    shortDescription:{
        type:String
    },
    longDescription:{
        type:String
    },
    status:{
        type:String
    },
    authors:[
        {
          type:String  
        }
    ],
    categories:[
        {
            type:String
        }
    ],
})

const Books = mongoose.model("Books", bookschema)

module.exports = Books;

