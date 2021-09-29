const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const sgMail = require('@sendgrid/mail')
import axios from 'axios'
const { shuffler } = require('utils/shuffler')

export default async function handler(req, res) {
  let data = {
    active: true,
  }

  const sessions = await stripe.checkout.sessions.list({ limit: 100 })

  for (let i = 0; i < sessions.data.length; i++) {
    if (sessions.data[i].metadata.token === req.query.token) {
      const customer = await stripe.customers.retrieve(
        sessions.data[i].customer
      )

      if (customer.name !== null && customer.email !== null) {
        data = {
          active: true,
          name: customer.name,
          email: customer.email,
        }
      }

      sgMail.setApiKey(process.env.SENDGRID_API_KEY)

      const msg = {
        to: customer.email,

        from: 'alvo@thevip.io',

        subject: 'Here is your preview url',

        html: `<a>http://${req.headers.host}/preview/${req.query.slug}?token=${req.query.token}</a>`,
      }

      await sgMail.send(msg)

      try {
        const token = new Date().getTime() + '-' + shuffler(6)

        const axr = await axios.post(
          'https://api.thevip.io/auth/local/register',
          {
            username: token,
            email: customer.email,
            password: customer.email,
            fullName: customer.name,
          }
        )

        console.log(await axr.data)
      } catch (e) {
        console.log(e.message)
      }

      break
    }
  }

  let response = await fetch(
    `https://api.thevip.io/verifiers?slug=${req.query.slug}&token=${req.query.token}`
  )

  response = await response.json()

  if (response.length === 0) {
    res.status(404).end('Not found!')
  } else {
    try {
      await fetch(`https://api.thevip.io/verifiers/${response[0].id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (req.query.referrer === 'stripe') {
        res.redirect(
          303,
          `http://${req.headers.host}/preview/${req.query.slug}?token=${req.query.token}`
        )
      } else {
        res.status(200)
      }
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message)
    }
  }
}
