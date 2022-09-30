const nodemailer = require('nodemailer');


const sendEmail = ({ name, email, subject, text }) => {
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.NODEMAILER_EMAIL,
			pass: process.env.NODEMAILER_PW
		}
	});

	const mailOptions = {
		from: `Juan Funes Portfolio - New message from:<juanfuneslg@gmail.com>`,
		to: 'juan.funes.96@outlook.com',
		subject,
		text:
			`New message from: ${name} <${email}>\n\n${text}`
	};

	transporter.sendMail(mailOptions, (error) => {
		if (error) {
			return res.status(500).json({ error })
		}
	})
}

module.exports = sendEmail;