import React, { memo, useContext } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {
  LazyMotion,
  domAnimation,
  m,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import { LanguageContext } from '../../context/LanguageContext'
import { hero } from '../../data'

const ViewMoreBar = () => {
  const { scrollY } = useViewportScroll()

  const opacityVal = useTransform(scrollY, [0, 200, 400], [1, 0.5, 0])
  const yVal = useTransform(scrollY, [0, 200, 400], [0, 30, 75])
  const { lang } = useContext(LanguageContext)

  return (
    <LazyMotion features={domAnimation}>
      <m.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Wrapper
          initial={{ x: '-50%' }}
          animate={{ y: [-5, 0, -5] }}
          transition={{
            easings: 'ease-in-out',
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Container style={{ opacity: opacityVal, y: yVal }}>
            <Link href='#about'>
              <a>
                <Text>{hero[lang].bottomMoreText}</Text>
              </a>
            </Link>
            <Line />
          </Container>
        </Wrapper>
      </m.span>
    </LazyMotion>
  )
}

export default memo(ViewMoreBar)

// Styles
const Wrapper = styled(m.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 50%;
  z-index: 100;

  @media (min-width: 500px) {
    bottom: 20px;
  }

  @media (min-width: 600px) {
    bottom: 35px;
  }

  @media (min-width: 1024px) {
    bottom: 15px;
  }

  @media (min-width: 1500px) {
    bottom: 35px;
  }

  @media (min-width: 1800px) {
    bottom: 95px;
  }

  @media (min-width: 500px) and (max-width: 820px) and (orientation: landscape) {
    bottom: -20px;
  }
`

const Container = styled(m.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text = styled(m.span)`
  color: hsl(195, 92%, 85%);
  font-size: 1.4rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.03);
  padding: 3px 5px;
  border-radius: 5px;
  font-family: 'Space Grotesk', sans-serif;
`

const Line = styled(m.div)`
  width: 2px;
  height: 25px;
  background: rgba(97, 218, 251, 0.7);
  margin-top: 8px;

  @media (min-width: 768px) {
    height: 40px;
  }
`
