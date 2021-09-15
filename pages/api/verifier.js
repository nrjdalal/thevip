const fs = require('fs')

export default async function handler(req, res) {
  fs.readFile('public/links/' + req.query.slug, 'utf8', (err, response) => {
    if (err) throw err
    response = response.split('\n')

    fs.writeFileSync('public/links/' + req.query.slug, '', err)

    for (let line of response) {
      if (line !== '') {
        if (line === `${req.query.slug} ${req.query.token}`) {
          line = `${req.query.slug} ${req.query.token} verified`
        }

        fs.appendFileSync('public/links/' + req.query.slug, line + '\n', err)
      }
    }
  })

  res.redirect(
    303,
    `${req.headers.origin}/preview/${req.query.slug}?token=${req.query.token} `
  )
}
