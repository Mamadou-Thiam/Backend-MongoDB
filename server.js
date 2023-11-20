const express = require("express");
const cors=require("cors");


require("dotenv").config( {path: "./config/.env"});
require("./config/db")

const routers=require("./routes/routes")


const app = express();

app.use(cors())
app.use(express.json())
app.use("/api", routers)

const port = 5000;

app.listen(port, () => {
  console.log("server is runnig... ");
});
