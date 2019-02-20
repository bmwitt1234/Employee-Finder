var express = require("express")
var app = express();
let PORT = 8080;


var htmlRoutes = require("./app/routing/htmlRoutes.js")
app.use(htmlRoutes);

var apiRoutes = require("./app/routing/apiRoutes.js")
app.use(apiRoutes);

app.use(express.static("./app/public"))

// Starts our server on the predefined PORT
app.listen(PORT, function () {
    console.log(`App is now listening on PORT ${PORT}`)
})