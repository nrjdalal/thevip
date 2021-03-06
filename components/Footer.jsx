/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center bg-black ">
        <div className="max-w-screen-md py-10 mx-auto ">
          {/* logo */}
          <div className="flex justify-center">
            <Link href="/">
              <a>
                <img className="w-24" src="/kloov_logo.svg" alt="" />
              </a>
            </Link>
          </div>
          {/* links */}
          <div className="flex justify-between pt-10 text-xs text-white w-72 md:w-80 md:text-sm font-nunitoSans">
            <div>About Us</div>
            <div>Terms</div>
            <div>Privacy Policy</div>
            <div>Cookie Policy</div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
