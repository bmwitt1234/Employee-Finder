var express = require("express")
var router = express.Router()
var employees = require("../data/employees.js")
// route
router.get("/employees",function(req, res){
   res.send(employees)
})

router.post("/find-employee", function(req, res){
    res.send("matchFound")
})

module.exports = router