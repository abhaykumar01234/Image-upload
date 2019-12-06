"use strict";

module.exports = app => {
	const controller = require("../controllers/log_entries");

	app
		.route("/log_entries")
		.get(controller.index)
		.post(controller.create);

	app
		.route("/log_entries/:id")
		.get(controller.show)
		.put(controller.update)
		.delete(controller.delete);
};
