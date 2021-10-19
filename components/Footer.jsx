/* eslint-disable @next/next/no-img-element */

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center bg-black ">
        <div className="max-w-screen-md py-10 mx-auto ">
          {/* logo */}
          <div className="flex justify-center">
            <img className="w-20" src="/kloov_logo.svg" alt="" />
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
