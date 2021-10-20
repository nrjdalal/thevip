import Text from 'components/Text'
import ReactMarkdown from 'react-markdown'

export async function getServerSideProps(context) {
  const page = context.resolvedUrl.slice(1)

  let query = `https://api.thevip.io/${page}`

  const res = await fetch(query)
  const data = await res.json()

  return {
    props: { data },
  }
}

const content = ({ data }) => {
  return (
    <>
      <Text>
        <ReactMarkdown>{data.data}</ReactMarkdown>
      </Text>
    </>
  )
}

export default content
