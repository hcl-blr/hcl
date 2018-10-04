var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname+"/step6-storage-more.html")
})
app.listen(1010);
console.log("server is now live");