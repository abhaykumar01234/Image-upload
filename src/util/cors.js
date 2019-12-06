"use strict";

module.exports = app => {
	const cors = require("cors");
	const corsOptions = {
		origin: (origin, callback) => {
			// console.log(origin);
			if (!origin || process.env.WHITELIST.split(" ").indexOf(origin) !== -1) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS configuration"));
			}
		},
		methods: "GET, HEAD, POST, PUT, PATCH, DELETE"
	};

	const publicOptions = {
		origin: (origin, callback) => {
			callback(null, true);
		},
		methods: "GET"
	};

	app.options("*", cors(corsOptions));
	app.use(cors(corsOptions));
	app.use("/public", cors(publicOptions));
};
