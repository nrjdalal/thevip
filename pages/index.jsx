import Countdown from 'react-countdown'

import { PreRelease } from 'components/Artist'

const index = () => {
  return (
    <>
      <Countdown date={'2021-09-11T10:00:00.000Z'} />
      <PreRelease />
    </>
  )
}

export default index
