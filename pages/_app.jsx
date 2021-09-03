import Footer from 'components/Footer'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="relative font-nunitoSans tracking-wide h-screen bg-black">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
