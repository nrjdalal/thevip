/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const Text = (props) => {
  return (
    <>
      <div className="py-20 bg-white">
        <div className="flex justify-center pb-6">
          <Link href="/">
            <a>
              <img className="w-32" src="/kloov_logo_black.svg" alt="" />
            </a>
          </Link>
        </div>

        <div className="container px-4 mx-auto prose max-w-none md:w-2/3 font-montserrat">
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Text
