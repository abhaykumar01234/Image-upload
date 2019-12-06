"use strict";

module.exports = app => {
	const fs = require("fs");
	const path = require("path");
	const multer = require("multer");

	const storage = multer.diskStorage({
		destination: (req, file, cb) => {
			const uploadsDir = path.join(
				__dirname,
				"..",
				"..",
				"public",
				"uploads",
				`${Date.now()}`
			);
			fs.mkdirSync(uploadsDir);
			cb(null, uploadsDir);
		},
		filename: (req, file, cb) => {
			cb(null, file.originalname);
		}
	});

	const upload = multer({ storage });
	const controller = require("../controllers/images");

	app
		.route("/log_entries/:log_entry_id/images")
		.get(controller.index)
		.post(upload.single("data"), controller.create);

	app
		.route("/images/:id")
		.get(controller.show)
		// .put(controller.update)
		.delete(controller.destroy);
};
