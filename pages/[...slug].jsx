import { PreRelease } from 'components/Artist'
import { useRouter } from 'next/router'
import Countdown from 'react-countdown'

export async function getServerSideProps(context) {
  console.log(Date())

  let searchTerm = context.query.slug[0].toLowerCase().replace(/ /g, '-')

  let query = `https://api.thevip.io/artists?slug=${searchTerm}`

  const res = await fetch(query)
  const data = await res.json()

  return {
    props: { data },
  }
}

const Index = ({ data }) => {
  const router = useRouter()

  let title, artist, label, cover, price, NFT

  // getting artist data
  data = data[0]

  if (!data) {
    return (
      <>
        <div className="py-40 text-center text-white">No such track</div>
      </>
    )
  }

  if (typeof data === 'undefined') {
    return (
      <>
        <div className="py-40 text-center text-white">No such track</div>
      </>
    )
  }

  // getting selective pre-release
  let pre_release = data.pre_releases[data.pre_releases.length - 1]

  if (router.query.slug.length === 2) {
    for (let i = 0; i < data.pre_releases.length; i++) {
      if (router.query.slug[1] === data.pre_releases[i].slug) {
        pre_release = data.pre_releases[i]
      }
    }
  }

  // getting label
  for (let i = 0; i < data.labels.length; i++) {
    if (pre_release.label === data.labels[i].id) {
      label = data.labels[i].name
    }
  }

  title = pre_release.title
  artist = data.artistName
  cover = `https://api.thevip.io${pre_release.cover.url}`
  price = `${pre_release.currency} ${pre_release.price}`

  if (pre_release.NFTcollection.length !== 0) {
    NFT = pre_release.NFTcollection
  } else {
    NFT = 'false'
  }

  const renderer = ({ days, hours, minutes }) => {
    return (
      <>
        {days} days | {hours} hours | {minutes} minutes
      </>
    )
  }

  return (
    <>
      <PreRelease
        title={title}
        artist={artist}
        label={label}
        cover={cover}
        countdown={<Countdown date={pre_release.dateEnd} renderer={renderer} />}
        price={price}
        data={pre_release}
        nft={NFT}
      />
    </>
  )
}

export default Index
