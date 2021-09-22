const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const { shuffler } = require('utils/shuffler')

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const token = shuffler(64)

      let data = {
        slug: req.body.metadata.slug,
        token: token,
      }

      await fetch('https://api.thevip.io/verifiers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: req.body.product,
            quantity: 1,
          },
        ],
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${req.headers.origin}/api/verifier?slug=${data.slug}&token=${token}&referrer=stripe`,
        cancel_url: `${req.headers.origin}`,
        metadata: data,
      })

      res.status(200).json(session)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
