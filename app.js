const express = require("express");
const app = express();
const controller =require("./controller");


app.use(express.json());

app.get("/", controller.getall);
app.post("/", controller.create);
app.delete("/", controller.delete);
app.put("/", controller.update);

module.exports = app;
