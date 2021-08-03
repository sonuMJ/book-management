const Books = require('../models/Books')
const jsonHelper = require('../utils/jsonHelper')

exports.Viewall = async (req, res) => {
    try {
        let books = await Books.find()
        let page_number = req.params.page;
        let limit = req.params.limit;
        console.log(page_number, limit);
        if(page_number == 0 || page_number == undefined){
            page_number = 1;
        }
        if(limit == 0 || limit == undefined){
            limit = 10;
        }
        if(books){
            let showpage = books.splice((page_number - 1) * limit, page_number * limit) 
            return res.status(200).json(showpage)
        }
    } catch (error) {
        return res.status(500).json({message:"Something went wrong!"})
    }
}

exports.Savebooklist = async (req,res) => {
    try {
        let data = await jsonHelper.readJson();
        if(data){
            Books.insertMany(data)
                .then((result) => {
                    return res.status(200).json({message:"books added successfully to database"})
                })
                .catch(err => {
                    return res.status(500).json({message:err.message||"Something went wrong!"})
                })
        }else{
            return res.status(404).json({message:"books not found!"})
        }
    } catch (error) {
        return res.status(500).json({message:error.message||"Something went wrong" })
    }
    
}