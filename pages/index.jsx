import { PreRelease } from 'components/Artist'

export async function getServerSideProps() {
  const res = await fetch('https://api.thevip.io/pre-releases')
  const data = await res.json()

  return {
    props: { data },
  }
}

const index = ({ data }) => {
  console.log(data)

  return <></>
}

export default index
