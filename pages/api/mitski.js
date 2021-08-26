// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const info = {
  'artist name': 'MITSKI',
  tracks: [
    {
      'upload date': '1629916200',
      'publish date': '1629959400',
      'end date': '1630391400',
      title: 'Washing Machine Heart',
      cover:
        'https://images.unsplash.com/photo-1629934680935-9dad78d0de29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      label: 'Warner Chappell Music, Inc',
      price: '$$4.99',
    },
  ],
}

export default function handler(req, res) {
  res.status(200).json(info)
}
