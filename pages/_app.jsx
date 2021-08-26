import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="font-barlow tracking-wide">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
