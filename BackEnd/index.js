// "use-strict"
const express = require("express");
const mongoose = require("mongoose");
const ConnectionString = "mongodb://127.0.0.1:27017/stockBuddy";

//Monggose connection
async function main() {
  await mongoose.connect(ConnectionString);
}
main().catch((err) => {
  console.log("Unable to connect database",err);
});
//Set up middleware and Express
const app = express();
app.listen(8080,()=>{
    console.log("Sun raha hu bc")
})

app.get("/",(req,res)=>{
    res.send("Idher dekh bsdk");
})

app.get("/stock/wishtlist")
app.get("/stock/user/:id/portfolio");
