const express = require("express");
const app= express();
const port=5000;
const path= require("path");

// app.use(express.static(path.join(__dirname, "/public/css")));
// app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

app.listen(port,()=>{
    console.log(`Portfolio running on http://localhost: ${port}`);
});

app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/projects",(req,res)=>{
    res.render("project.ejs");
});

app.get("/about",(req,res)=>{
    res.render("about.ejs");
});

app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
});
