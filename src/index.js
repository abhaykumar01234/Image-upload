"use strict";

require("dotenv").config();
const path = require("path");
// const axios = require("axios");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const connectDB = require("./util/db");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

require("./util/cors")(app);
require("./routes/index")(app);

app.get("/", (req, res) => res.send("Hello world"));

// app.get("/api/hello", (req, res) => {
// 	axios
// 		.get("http://ec2-15-206-72-82.ap-south-1.compute.amazonaws.com:3000/")
// 		.then(r => res.send(r.data))
// 		.catch(err => res.send(err));
// });

app.listen(port, () =>
	console.log(`The great cheese log port is running on port ${port}`)
);
