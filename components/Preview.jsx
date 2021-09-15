/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

export const Preview = (props) => {
  const [isStart, setStart] = useState(false)

  const toggleStart = () => {
    setStart(true)
  }

  return (
    <>
      <div className="bg-raisenBlack py-10 md:py-40">
        {/* section 01 */}
        <div className="max-w-screen-md mx-auto flex flex-col md:flex-row md:px-4">
          {/* cover */}
          <div className="relative md:w-1/2 md:order-2 md:ml-2">
            <div className="aspect-w-1 aspect-h-1 filter brightness-50 contrast-50">
              <img
                className="object-center object-cover"
                src={
                  props.cover ||
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png'
                }
                alt=""
              />
            </div>
            <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center w-full p-6 h-full justify-center">
              <div className="font-montserrat font-semibold mb-6 text-sm">
                Please, read before pressing play
              </div>

              <div className="mb-6 text-sm">
                After pressing play, you will be able to listen to the music
                only once.
              </div>

              <div
                onClick={toggleStart}
                className="bg-white text-black rounded-md p-1.5 px-3 text-xs font-nunitoSans font-semibold cursor-pointer"
              >
                Take me to the pre-release
              </div>
            </div>
            {/* streamer */}
            <div
              style={isStart ? { display: 'flex' } : { display: 'none' }}
              className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center w-full h-full justify-center"
            >
              <iframe
                src="https://iframe.videodelivery.net/eyJhbGciOiJSUzI1NiIsImtpZCI6IjdhZDI2YTY1Y2M5NWU3YjM0NWVjMzVkZmIyZDJkYzQ0In0.eyJzdWIiOiIyYjA4OTU3MTFjNTc3YTQ1NWM3Mjg2YWRjYzA0MGNiMyIsImtpZCI6IjdhZDI2YTY1Y2M5NWU3YjM0NWVjMzVkZmIyZDJkYzQ0IiwiZXhwIjoiMTYzMTUzNjIyMyIsIm5iZiI6IjE2MzE1MjkwMjMifQ.pPPHGnHpDKZXBb9-2h7qnEBsZ5IG_eS7xjA84p9lTNZb6ubJFtwjTb7k352oZ4VAOAJmsCDFTdnebAvaJ8o59BmDBrzwbB9P59BV-QQ4N8BPMdczpN5wgbitjDEWTC4J9lOOrqsA4wWkNoc6M5G-wpAXIX5vPvLp2OoFJ6kwB-aZ6fZisUeiUDMvvT8TbZT3sCrdM3Qx2uKnwBIPSOOTmI_N24c-bQ7eq_lrkaRQoA-7pwP3T5HcI68DkeaKoqRUrJNaUhIwo-hDAYZayQFU90Pm23yqxie7DM6dYk7wyu2vWPIKphABL46TFf1tLcI-sb4nJ-Hk0KAgoTIcscdMig"
                className="border-none w-full h-full"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen="true"
              ></iframe>
            </div>
          </div>
          {/* song info */}
          <div className="ml-4 md:ml-0 mt-6 md:mt-0 md:w-1/2 md:order-1 md:mr-2 text-white font-montserrat text-xl">
            <div className="font-medium md:font-semibold md:text-5xl">
              {props.title || 'Untitled'}
            </div>
            <div className="text-gray-300 md:text-3xl md:text-white md:font-semibold md:mt-5">
              {props.artist || 'Unknown'}
            </div>
            <div className="text-gray-300 text-base font-nunitoSans md:mt-5">
              © {props.label || 'Unlabelled'}
            </div>
          </div>
        </div>

        {/* section 02 */}
        <div className="hidden md:block mx-auto max-w-[736px] h-[1px] bg-gray-300"></div>

        {/* section 03 */}
        <div className="max-w-screen-md mx-auto pt-10 flex flex-col md:flex-row items-center justify-between md:px-4">
          <div className="text-white text-center md:text-left">
            <div className="font-semibold">Lyrics</div>
            <div className="mt-2 text-gray-300 font-normal text-sm">
              {props.lyrics || 'No lyrics available'}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// You did not provide an API key. You need to provide your API key in the Authorization header, using Bearer auth (e.g. 'Authorization: Bearer YOUR_SECRET_KEY'). See https://stripe.com/docs/api#authentication for details, or we can help at https://support.stripe.com/.
