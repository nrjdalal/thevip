import { Preview } from 'components/Preview'

export async function getServerSideProps(context) {
  let searchTerm = context.query.slug

  let query = `https://api.thevip.io/pre-releases?slug=${searchTerm}`

  const res = await fetch(query)
  const data = await res.json()

  let tokenCheck = `https://api.thevip.io/verifiers?token=${context.query.token}`

  const res2 = await fetch(tokenCheck)
  const data2 = await res2.json()

  return {
    props: {
      data: {
        data: data,
        token: data2,
      },
    },
  }
}

const Index = ({ data }) => {
  let token = data.token[0]

  if (!token) {
    return (
      <>
        <div className="text-center text-white py-96 px-8">
          Please purchase for access
        </div>
      </>
    )
  }

  if (typeof token === 'undefined') {
    return (
      <>
        <div className="text-center text-white py-96 px-8">
          Please purchase for access
        </div>
      </>
    )
  }

  let title, artist, label, cover, lyrics

  // getting artist data
  data = data.data[0]

  if (!data) {
    return (
      <>
        <div className="text-center text-white py-40">No such track</div>
      </>
    )
  }

  if (typeof data === 'undefined') {
    return (
      <>
        <div className="text-center text-white py-40">No such track</div>
      </>
    )
  }

  // getting title
  title = data.title

  // getting artist
  artist = data.artist.artistName

  // getting label
  label = data.label.name

  // getting cover
  cover = `https://api.thevip.io${data.cover.url}`

  // getting lyrics

  lyrics = data.lyrics

  return (
    <>
      <Preview
        title={title}
        artist={artist}
        label={label}
        cover={cover}
        lyrics={lyrics}
        video={data.streamVideoID}
        date={data.dateEnd}
        token={token}
      />
    </>
  )
}

export default Index
