export default async function handler(req, res) {
  let response = await fetch(
    `https://api.thevip.io/verifiers?slug=${req.query.slug}&token=${req.query.token}`
  )

  response = await response.json()

  console.log(req)

  if (response.length === 0) {
    res.status(404).end('Not found!')
  } else {
    try {
      let data = {
        active: true,
      }

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
          `${req.headers.origin}/preview/${req.query.slug}?token=${req.query.token} `
        )
      } else {
        res.status(200).end('Verified')
      }
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message)
    }
  }
}
