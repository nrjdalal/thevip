import { Preview } from 'components/Preview'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  let searchTerm = context.query.slug

  let query = `https://api.thevip.io/pre-releases?slug=${searchTerm}`

  const res = await fetch(query)
  const data = await res.json()

  return {
    props: { data },
  }
}

const Index = ({ data }) => {
  const router = useRouter()

  let title, artist, label, cover, lyrics

  // getting artist data
  data = data[0]

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

  // console.log(data)

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

  console.log(lyrics)

  return (
    <>
      <Preview
        title={title}
        artist={artist}
        label={label}
        cover={cover}
        lyrics={lyrics}
      />
    </>
  )
}

export default Index
