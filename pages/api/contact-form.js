const sgMail = require('@sendgrid/mail')
const { SENDGRID_API_KEY } = process.env

const contactForm = async (req, res) => {
  const { name, email, subject, message } = req.body

  sgMail.setApiKey(SENDGRID_API_KEY)

  const html = `
    <h2>${name}</h2>
    <h4>${email}</h4>
    <h4>${subject}</h4>
    <p>${message}</p>
  `

  const msg = {
    to: process.env.SENDGRID_EMAIL,
    from: process.env.SENDGRID_EMAIL,
    subject: `Contact form - Portfolio: ${subject}`,
    html: html,
  }

  try {
    await sgMail.send(msg)

    return res.status(200).json({ message: 'Email sent!' })
  } catch (err) {
    return res.status(400).json({ message: err.message })
  }
}

export default contactForm
