const nodemailer = require('nodemailer')
const { PASSWORD, SEND_EMAIL, AUTH_EMAIL } = process.env

const contactForm = (req, res) => {
  const { name, email, subject, message } = req.body

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: AUTH_EMAIL,
      pass: PASSWORD,
    },
    secure: true,
  })

  const html = `
    <h2>Utilisateur: ${name}</h2>
    <h4>email: ${email}</h4>
    <h4> subject: ${subject}</h4>
    <p>message: ${message}</p>
  `

  const msg = {
    to: SEND_EMAIL,
    from: email,
    subject: `Contact form - Portfolio: ${subject}`,
    html: html,
  }

  transporter.sendMail(msg, (err, info) => {
    if (err) {
      return res.status(400).json({ message: err.message })
    }
    return res.status(200).json({ message: 'Email sent!' })
  })
}

export default contactForm
