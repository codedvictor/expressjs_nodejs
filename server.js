//jshint esversion:6
const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Server Here</h1>");
});
app.get("/contact", function(req, res){
    res.send("Contact me on 08168869442, victorkoladeige@gmail.com");
});
app.get("/about", function(req, res){
    res.send("I'm Victor, professional digital marketeer and web developer");
});
app.get("/nav", function(req, res){
    res.send("<ul><li>Home</li><li>About Us</li><li>Contact Us</li><li>Our project</li></ul>")
});
app.listen(3000, function(){
    console.log("Server: 3000 started.");
});