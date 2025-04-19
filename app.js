const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})
app.get("/advance",(req,res)=>{
    res.render("advance.ejs");
})

app.listen(port,()=>{
    console.log("app listening on port 3000");

})