const path = require('path');

const sendEmailhelper = require('../helpers/sendEmail');

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
	getCV,
	sendEmail
}