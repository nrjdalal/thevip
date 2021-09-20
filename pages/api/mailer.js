const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')

export default async function handler(req, res) {
  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.allo.win',
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: 'nrjdalal@allo.win',
  //     pass: '',
  //   },
  // })

  // await transporter.sendMail({
  //   from: `"The Vip" <thevip@allo.win>`,
  //   to: req.body.email,
  //   subject: 'Here is your preview url',
  //   html: `<a>${req.body.token}</a>`,
  // })

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: req.body.email,

    from: 'alvo@thevip.io',

    subject: 'Here is your preview url',

    html: `<a>${req.headers.origin}${req.body.token}</a>`,
  }

  await sgMail.send(msg)

  res.status(200).end('the end')
}
