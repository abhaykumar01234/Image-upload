"use strict";

const Image = require("../models/image");

exports.index = (req, res) => {
	Image.find({ logEntryId: req.params.log_entry_id }, (err, image) => {
		if (err) res.send(err);
		res.json(image);
	});
};

exports.show = (req, res) => {
	Image.findById(req.params.id, (err, image) => {
		if (err) res.send(err);
		res.json(image);
	});
};

exports.create = (req, res) => {
	const path = require("path");
	const remove = path.join(__dirname, "..", "..", "public");
	const relPath = req.file.path.replace(remove, "");
	const newImage = new Image(req.body);
	newImage.logEntryId = req.params.log_entry_id;
	newImage.path = relPath;
	newImage.save((err, image) => {
		if (err) res.send(err);
		res.json(image);
	});
};

// exports.update = (req, res) => {};

exports.destroy = (req, res) => {
	Image.deleteOne({ _id: req.params.id }, (err, image) => {
		if (err) res.send(err);

		// write code to remove img from storage as well
		res.json({
			message: `Image (${req.params.id}) was successfully deleted`
		});
	});
};
