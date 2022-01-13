import { m } from 'framer-motion'
import styled from 'styled-components'

const Wave3 = () => {
  return (
    <Wrapper
      viewBox='0 0 1919 315'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        style={{ overflow: 'hidden' }}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 83.0769L80 69.2308C160 55.3846 320 27.6923 480 55.3846C640 83.0769 800 166.154 960 180C1120 193.846 1280 138.462 1440 96.9231C1600 55.3846 1760 27.6923 1840 13.8462L1920 0V315H1840C1760 315 1600 315 1440 315C1280 315 1120 315 960 315C800 315 640 315 480 315C320 315 160 315 80 315H0V83.0769Z'
        fill='var(--bubbleBig)'
      />
    </Wrapper>
  )
}

export default Wave3

const Wrapper = styled(m.svg)`
  position: absolute;
  bottom: -15px;
  left: -3%;
  right: -3%;
  z-index: 999;
  width: 103%;
  pointer-events: none;

  @media (min-width: 1024px) {
    bottom: -55px;
  }

  @media (min-width: 1305px) {
    bottom: -75px;
  }

  @media (min-width: 500px) and (max-width: 820px) and (orientation: landscape) {
    bottom: -60px;
  }
`
