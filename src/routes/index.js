"use strict";

module.exports = app => {
	const logEntries = require("./log_entries");
	const images = require("./images");
	logEntries(app);
	images(app);
};
