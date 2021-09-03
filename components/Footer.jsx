/* eslint-disable @next/next/no-img-element */

const Footer = () => {
  return (
    <>
      <footer className="bg-black flex flex-col items-center ">
        <div className="max-w-screen-md mx-auto py-10 ">
          {/* logo */}
          <div className="flex justify-center">
            <img
              className="w-40"
              src="https://placeholder.com/wp-content/uploads/2018/10/placeholder-1.webp"
              alt=""
            />
          </div>
          {/* links */}
          <div className="text-white flex justify-between pt-10 w-72 text-xs md:w-80 md:text-sm font-nunitoSans">
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
