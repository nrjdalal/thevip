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
    // metadata: props.data,
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

  return (
    <>
      <div className="bg-raisenBlack py-10 md:py-40">
        {/* section 01 */}
        <div className="max-w-screen-md mx-auto flex flex-col md:flex-row md:px-4">
          {/* cover */}
          <div className="md:w-1/2 md:order-2 md:ml-2">
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="object-center object-cover"
                src={
                  props.cover ||
                  'https://images.unsplash.com/photo-1562860149-691401a306f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                }
                alt=""
              />
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
            <div className="text-gray-300 font-medium">
              Countdown to pre-release
            </div>
            <div className="mt-2 font-medium">
              {props.countdown || '00 days | 00 hours | 00 minutes'}
            </div>
          </div>
          {/* button */}
          <div
            onClick={handleSumbit}
            className="bg-white p-2 px-4 mt-6 md:mt-0 rounded-md font-medium cursor-pointer"
          >
            Buy your ticket now {props.price || '$0.00'}
          </div>
        </div>
      </div>
    </>
  )
}

// You did not provide an API key. You need to provide your API key in the Authorization header, using Bearer auth (e.g. 'Authorization: Bearer YOUR_SECRET_KEY'). See https://stripe.com/docs/api#authentication for details, or we can help at https://support.stripe.com/.
