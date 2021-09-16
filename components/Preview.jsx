/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { Stream } from '@cloudflare/stream-react'
import Countdown from 'react-countdown'

export const Preview = (props) => {
  const [isStart, setStart] = useState(false)

  const toggleStart = () => {
    setStart(true)
  }

  const [isEnded, setEnded] = useState(false)

  const toggleEnded = () => {
    setEnded(true)
  }

  const videoIdOrSignedUrl = props.video

  let currentDate = parseInt((new Date().getTime() / 1000).toFixed(0))
  let preDate = parseInt((new Date(props.date).getTime() / 1000).toFixed(0))

  const LowerSegment = () => {
    if (currentDate < preDate) {
      const renderer = ({ days, hours, minutes }) => {
        return (
          <>
            {days} days | {hours} hours | {minutes} minutes
          </>
        )
      }

      return (
        <>
          <div className="max-w-screen-md mx-auto pt-10 flex flex-col items-center md:px-4">
            <div className="text-white text-center">
              <div className="text-gray-300 font-medium">
                Countdown to pre-release
              </div>
              <div className="mt-2 font-medium">
                <Countdown date={props.date} renderer={renderer} />
              </div>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div
            style={isEnded ? { display: 'none' } : { display: 'flex' }}
            className="max-w-screen-md mx-auto pt-10 flex flex-col md:flex-row items-center justify-between md:px-4"
          >
            <div className="text-white text-center md:text-left">
              <div className="font-semibold">Lyrics</div>
              <div className="mt-2 text-gray-300 font-normal text-sm whitespace-pre">
                {props.lyrics || 'No lyrics available'}
              </div>
            </div>
          </div>
        </>
      )
    }
  }

  const PreButton = () => {
    if (currentDate < preDate) {
      return (
        <>
          <div className="aspect-w-1 aspect-h-1">
            <img
              className="object-center object-cover"
              src={props.cover}
              alt=""
            />
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="aspect-w-1 aspect-h-1 filter brightness-50 contrast-50">
            <img
              className="object-center object-cover"
              src={props.cover}
              alt=""
            />
          </div>
          <div
            style={isStart ? { display: 'none' } : { display: 'flex' }}
            className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center w-full p-6 h-full justify-center"
          >
            <div className="mb-6 bg-white h-6 w-6 flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#18a0aa]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="font-montserrat font-semibold mb-6 text-sm">
              Please, read before pressing play
            </div>

            <div className="mb-6 text-sm">
              After pressing play, you will be able to listen to the music only
              once.
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
            {isStart ? (
              <Stream
                src={videoIdOrSignedUrl}
                className="w-full h-full"
                autoplay={true}
                preload="metadata"
                onEnded={toggleEnded}
              />
            ) : (
              'Video ready to be played.'
            )}
          </div>

          {/* after playback */}
          <div
            style={isEnded ? { display: 'flex' } : { display: 'none' }}
            className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center w-full h-full justify-center aspect-w-1 aspect-h-1"
          >
            <img
              className="object-cover object-center"
              src="https://optinmonster.com/wp-content/uploads/2016/10/Anatomy-of-the-Perfect-Thank-You-Page.png"
              alt=""
            />
          </div>
        </>
      )
    }
  }

  return (
    <>
      <div className="bg-raisenBlack py-10 md:py-40">
        {/* section 01 */}
        <div className="max-w-screen-md mx-auto flex flex-col md:flex-row md:px-4">
          {/* cover */}
          <div className="relative md:w-1/2 md:order-2 md:ml-2">
            <PreButton />
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

        <LowerSegment />

        {/* after playback */}

        <div
          style={isEnded ? { display: 'flex' } : { display: 'none' }}
          className="max-w-screen-md mx-auto mt-6 md:mt-0 flex flex-col md:flex-row md:pl-4"
        >
          <div className="md:w-1/2 ">
            <img
              className="w-full"
              src="https://i.ibb.co/P50thSV/Screenshot-2021-09-15-at-19-14-46-Zeplin-Projects.png"
              alt=""
            />
          </div>
        </div>

        {/* closing div */}
      </div>
    </>
  )
}
