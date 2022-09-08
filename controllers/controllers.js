const path = require('path');

const sendEmailhelper = require('../helpers/sendEmail');

const getIndex = (req, res) => {
	res.sendFile(__dirname + '/public/index.html')
};

const getCV = (req, res) => {
	res.download(path.join(process.cwd() + '/public/cv/juanFunesCV.pdf'))
};

const sendEmail = (req, res) => {

	const { name, email, subject, text } = req.body;
	sendEmailhelper({ name, email, subject, text })

	res.status(200).json({
		ok: true,
		msg: 'El mail se envio con exito'
	})
};

module.exports = {
	getIndex,
	getCV,
	sendEmail
}