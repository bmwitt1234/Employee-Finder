var express = require("express")
var router = express.Router()
var path = require("path")

// route
router.get("/",function(req, res){
    // res.send({key:"value"})
    res.sendFile(path.join(__dirname,"../public/home.html"))
})

router.get("/survey",function(req, res){
    // res.send({key:"value"})
    res.sendFile(path.join(__dirname,"../public/survey.html"))
    
})
module.exports = router