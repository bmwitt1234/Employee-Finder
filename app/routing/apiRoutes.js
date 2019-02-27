var express = require("express")
var router = express.Router()
var employees = require("../data/employees.js")
// route
router.get("/employees",function(req, res){
   res.send(employees)
})

router.post("/find-employee", function(req, res){
    var newEmployeeScores = req.body.scores
    var chosenScore = 100
    var chosenIndex 
    for (let i = 0; i < employees.length; i++) {
        var diff = 0
       for (let j = 0; j < employees[i].scores.length; j++) {
           diff += Math.abs(newEmployeeScores[j] - employees[i].scores[j])
           
       }  
       console.log(diff);
       if(diff < chosenScore){
           chosenScore = diff
           chosenIndex = i
       }

    }
    res.send(employees[chosenIndex])
    
})

module.exports = router

var myNum = 3
myNum +=  20