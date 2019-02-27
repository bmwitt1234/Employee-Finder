$("#survey").on("submit",function(event){
    event.preventDefault()
    var q1=$("#question-1").val()
    var q2=$("#question-2").val()
    var q3=$("#question-3").val()
    var q4=$("#question-4").val()
    var q5=$("#question-5").val()
    var q6=$("#question-6").val()
    var q7=$("#question-7").val()
    var q8=$("#question-8").val()
    var q9=$("#question-9").val()
    var q10=$("#question-10").val()
    var newEmployee = {
        name: "Brian",
        photo: "",
        scores: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
    }
    console.log(newEmployee)
    $.post("/find-employee", newEmployee, function(data){
        console.log(data)
        var employeeImage = $('<img>')
        employeeImage.attr('src', data.photo)
        $('#match').append(data.name)
        $('#match').append(employeeImage)
    })
})