import { Preview } from 'components/Preview'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  console.log(context.query)

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

  console.log(data)

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

  // // getting selective pre-release
  // let pre_release = data.pre_releases[data.pre_releases.length - 1]

  // if (router.query.slug.length === 2) {
  //   for (let i = 0; i < data.pre_releases.length; i++) {
  //     if (router.query.slug[1] === data.pre_releases[i].slug) {
  //       pre_release = data.pre_releases[i]
  //     }
  //   }
  // }

  // // getting label
  // for (let i = 0; i < data.labels.length; i++) {
  //   if (pre_release.label === data.labels[i].id) {
  //     label = data.labels[i].name
  //   }
  // }

  // title = pre_release.title
  // artist = data.artistName
  // cover = `https://api.thevip.io${pre_release.cover.url}`

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
