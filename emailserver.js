/*
 * Email Script for automation -- sendgrid
 * Team Tedx
 * The MIT License
 */

 var c = require('./config'),
 	 f = require('fs'),
 	 s = require('sendgrid')(c.uname, c.pwd);

module.exports.registration = function (foo) {
	s.send({
		to:      foo.to,
		from:    "admin@tedxgitamuniversity.com",
		subject: "Registered | TEDxGITAMUniversity",
		text:    "Thank you for registering to TEDxGITAMUniversity. You have completed the process of registration, After some time you will recieve a mail with the ticket as an attachment."
	}, function (err, json) {
		if (err) {
			console.log(err);
		}
		else {
			console.log(json);
		}
	});
}

module.exports.contact = function (foo) {
	s.send({
		to: 	 "akhilhector.1@gmail.com",
		from: 	 foo.from,
		subject: "Contact | TEDxGITAMUniversity",
		text:    "Mailed from " + foo.name + " and the query is " + foo.query
	}, function (err, json) {
		if (err) {
			console.log(err);
		}
		else {
			console.log(json);
		}
	});
}

module.exports.ticketattach = function (foo) {
	f.readFile('/assets/tickets/' + foo.pdf, function (err, data) {
		s.send({
			to:      foo.to,
			from:    "admin@tedxgitamuniversity.com",
			subject: "Ticket | TEDxGITAMUniversity",
			text:    "Below is the ticket attached for the event TEDxGITAMUniversity 2016",
			files:   [{filename: foo.pdf, content: data}]
		}, function (err, json) {
			if (err) {
				console.log(err);
			}
			else {
				console.log(json);
			}
		});
	});
}
