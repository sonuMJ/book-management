const express = require('express')
const router = express.Router();
const bookController = require('../controller/bookController')

/**
 * @method GET
 * @description list all books from database, pagination added
 */
router.get("/viewall/:page/:limit", bookController.Viewall)
/**
 * @method POST
 * @description save books from json file to database
 */
router.post("/savebooklist", bookController.Savebooklist)

module.exports = router;