/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/router'

export const PreRelease = (props) => {
  const router = useRouter()

  const data = {
    product: {
      currency: props.data.currency.toLowerCase(),
      product_data: {
        name: `${props.artist} - ${props.title}`,
        images: [props.cover],
      },
      unit_amount_decimal: props.data.price * 100,
    },
    router: {
      fail: router.asPath,
    },
    metadata: props.data,
  }

  const handleSumbit = async () => {
    const session = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      },
      body: JSON.stringify(data),
    })

    const res = await session.json()
    router.push(res.url)
  }

  console.log(props.nft)
  const NFT = () => {
    if (props.nft !== 'false') {
      return (
        <>
          <div className="flex flex-col items-center max-w-screen-md px-4 pt-12 mx-auto md:flex-row md:items-start">
            <div className="flex flex-col items-center md:w-1/3">
              <div className="flex justify-center w-full font-medium text-white md:hidden font-montserrat">
                {props.nft[0].collectionName}
              </div>

              <div className="flex justify-between w-full pt-5 md:hidden">
                <div className="text-gray-300">Created by</div>
                <div className="text-gray-300">Editions</div>
              </div>

              <div className="flex justify-between w-full pt-2 pb-8 md:hidden">
                <div className="text-white font-nunitoSans">{props.artist}</div>
                <div className="text-white font-nunitoSans">
                  {props.nft[0].sold} of {props.nft[0].amount}
                </div>
              </div>

              <img
                className="w-4/5 md:w-full"
                src={'https://api.thevip.io' + props.nft[0].NFTimage.url}
                alt=""
              />
              <div className="pt-6 text-sm text-gray-300 font-nunitoSans">
                {props.nft[0].description}
              </div>
            </div>
            <div className="w-full md:pl-20 md:w-2/3 ">
              <div className="hidden font-medium text-white md:flex font-montserrat ">
                {props.nft[0].collectionName}
              </div>

              <div className="justify-between hidden pt-5 md:flex">
                <div className="text-gray-300">Created by</div>
                <div className="text-gray-300">Editions</div>
              </div>

              <div className="justify-between hidden pt-2 md:flex">
                <div className="text-white font-nunitoSans">{props.artist}</div>
                <div className="text-white font-nunitoSans">
                  {props.nft[0].sold} of {props.nft[0].amount}
                </div>
              </div>

              <div className="flex justify-between pt-5">
                <div className="text-gray-300">Auction details</div>
                <div className="text-gray-300">Highest bid</div>
              </div>

              <div className="flex justify-between pt-2">
                <div className="w-2/5 text-sm text-white font-nunitoSans">
                  Top 20 bidders get an exclusive access to the live premiere{' '}
                  {props.nft[0].collectionName}.
                </div>
                <div className="text-white font-nunitoSans">
                  {props.nft[0].highestBid}
                </div>
              </div>

              <div className="w-full h-[1px] bg-gray-500 mt-8"></div>
            </div>
          </div>
        </>
      )
    } else {
      return <></>
    }
  }

  return (
    <>
      <div className="py-10 bg-raisenBlack md:py-40">
        {/* section 01 */}
        <div className="flex flex-col max-w-screen-md mx-auto md:flex-row md:px-4">
          {/* cover */}
          <div className="md:w-1/2 md:order-2 md:ml-2">
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="object-cover object-center"
                src={
                  props.cover ||
                  'https://images.unsplash.com/photo-1562860149-691401a306f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                }
                alt=""
              />
            </div>
          </div>
          {/* song info */}
          <div className="mt-6 ml-4 text-xl text-white md:ml-0 md:mt-0 md:w-1/2 md:order-1 md:mr-2 font-montserrat">
            <div className="font-medium md:font-semibold md:text-5xl">
              {props.title || 'Untitled'}
            </div>
            <div className="text-gray-300 md:text-3xl md:text-white md:font-semibold md:mt-5">
              {props.artist || 'Unknown'}
            </div>
            <div className="text-base text-gray-300 font-nunitoSans md:mt-5">
              © {props.label || 'Unlabelled'}
            </div>
          </div>
        </div>

        {/* section 02 */}
        <div className="hidden md:block mx-auto max-w-[736px] h-[1px] bg-gray-300"></div>

        {/* NFT section */ NFT()}

        {/* section 03 */}
        <div className="flex flex-col items-center justify-between max-w-screen-md pt-10 mx-auto md:flex-row md:px-4">
          <div className="text-center text-white md:text-left">
            <div className="font-medium text-gray-300">
              Countdown to pre-release
            </div>
            <div className="mt-2 font-medium">
              {props.countdown || '00 days | 00 hours | 00 minutes'}
            </div>
          </div>
          {/* button */}
          <div
            onClick={handleSumbit}
            className="p-2 px-4 mt-6 font-medium bg-white rounded-md cursor-pointer md:mt-0"
          >
            Buy your ticket now {props.price || '$0.00'}
          </div>
        </div>
      </div>
    </>
  )
}
