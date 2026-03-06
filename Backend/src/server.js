require("dotenv").config();
const app = require("./app");
const connectdb  =require("./db/db")

connectdb();

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
