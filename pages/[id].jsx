import { PreRelease } from 'components/Artist'
import { useRouter } from 'next/router'
import Countdown from 'react-countdown'

export async function getServerSideProps() {
  const res = await fetch('https://api.thevip.io/pre-releases')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}

const Home = ({ data }) => {
  // console.log(data)

  const router = useRouter()

  for (let i = 0; i < data.length; i++) {
    if (
      data[i].artist.artistName.toLowerCase().replace(/ /g, '-') ===
      router.query.id.toLowerCase().replace(/ /g, '-')
    ) {
      data = data[i]
    }
  }

  const renderer = ({ days, hours, minutes }) => {
    return (
      <span>
        {days} days | {hours} hours | {minutes} minutes
      </span>
    )
  }

  return (
    <>
      <PreRelease
        title={data.title}
        artist={data.artist.artistName}
        label={data.label.name}
        cover={`https://api.thevip.io${data.cover.url}`}
        countdown={<Countdown date={data.dateEnd} renderer={renderer} />}
      />
    </>
  )
}

export default Home

// https://api.thevip.io/artists