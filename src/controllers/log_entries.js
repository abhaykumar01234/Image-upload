"use strict";

const LogEntry = require("../models/log_entry");

exports.index = (req, res) => {
	LogEntry.find({})
		.populate("images")
		.exec((err, logEntry) => {
			if (err) res.send(err);
			res.send(logEntry);
		});
};

exports.create = (req, res) => {
	const newLogEntry = new LogEntry(req.body);
	newLogEntry.save((err, logEntry) => {
		if (err) res.send(err);
		res.json(logEntry);
	});
};

exports.show = (req, res) => {
	LogEntry.findById(req.params.id)
		.populate("images")
		.exec((err, logEntry) => {
			if (err) res.send(err);
			res.json(logEntry);
		});
};

exports.update = (req, res) => {
	LogEntry.findOneAndUpdate(
		{ _id: req.params.id },
		req.body,
		{ new: true },
		(err, logEntry) => {
			if (err) res.send(err);
			res.json(logEntry);
		}
	);
};

exports.delete = (req, res) => {
	LogEntry.deleteOne({ _id: req.params.id }, (err, logEntry) => {
		if (err) res.send(err);
		res.json({
			message: `Log entry (${req.params.id}) was successfully deleted`
		});
	});
};
