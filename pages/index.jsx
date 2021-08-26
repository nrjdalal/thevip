/* eslint-disable @next/next/no-img-element */
const index = () => {
  return (
    <div className="bg-raisenBlack h-screen w-screen">
      {/* section 01 */}
      <div className="max-w-screen-md mx-auto pt-10 flex flex-col md:flex-row md:px-4">
        {/* album art */}
        <div className="md:w-1/2 md:order-2 md:ml-2">
          <div className="aspect-w-1 aspect-h-1">
            <img
              className="object-center object-cover"
              src="https://images.unsplash.com/photo-1629934680935-9dad78d0de29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt=""
            />
          </div>
        </div>
        {/* song info */}
        <div className="ml-4 md:ml-0 mt-6 md:mt-0 md:w-1/2 md:order-1 md:mr-2 text-white font-montserrat text-xl">
          <div className="font-medium md:font-semibold md:text-5xl">
            Washing Machine Heart
          </div>
          <div className="text-gray-300 md:text-3xl md:text-white md:font-semibold md:mt-5">
            MITSKI
          </div>
          <div className="text-gray-300 text-base font-nunitoSans md:mt-5">
            © Warner Chappell Music, Inc
          </div>
        </div>
      </div>

      {/* section 02 */}
      <div className="hidden md:block mx-auto max-w-[736px] h-[1px] bg-gray-300"></div>

      {/* section 03 */}
      <div className="max-w-screen-md mx-auto mt-10 flex flex-col md:flex-row items-center justify-between md:px-4">
        <div className="text-white text-center md:text-left">
          <div className="text-gray-300">Countdown to pre-release</div>
          <div className="mt-2">02 days | 11 hours | 23 minutes</div>
        </div>
        {/* button */}
        <div className="bg-white p-2 px-4 mt-6 md:mt-0 rounded-md">
          Buy your ticket now €4.99
        </div>
      </div>
    </div>
  )
}

export default index
