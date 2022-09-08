const nodemailer = require('nodemailer')

const sendEmail = ({ name, email, subject, text }) => {
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: 'juanfuneslg@gmail.com',
			pass: 'zhvaelpqqgsbqrxm'
		}
	});

	const mailOptions = {
		from: `Juan Funes Portfolio - New message from:<juanfuneslg@gmail.com>`,
		to: 'juan.funes.96@outlook.com',
		subject,
		text:
			`New message from: ${name} <${email}>\n\ntext: ${text}`
	};

	transporter.sendMail(mailOptions, (error) => {
		if (error) {
			return res.status(500).json({ error })
		}
	})
}

module.exports = sendEmail;