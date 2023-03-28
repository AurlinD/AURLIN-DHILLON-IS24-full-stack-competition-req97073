require("dotenv").config();

const express = require("express");
const app = express();

const db = [];
app.use(express.json());

app.listen(3008, () => console.log("Server started"));
