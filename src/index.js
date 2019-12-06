"use strict";

require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const connectDB = require("./util/db");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

require("./util/cors")(app);

app.listen(port, () =>
	console.log(`The great cheese log port is running on port ${port}`)
);
