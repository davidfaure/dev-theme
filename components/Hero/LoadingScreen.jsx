import React, { memo, useState, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { FaApple } from 'react-icons/fa'
import styled from 'styled-components'

import { hero } from '../../data'
import useWindowSize from '../../utils/size'

const LoadingScreen = () => {
  const size = useWindowSize()
  const isDesktop = size.width > 1300
  const [showLoadingScreen, setShowLoadingScreen] = useState(true)
  const [loadingState, setLoadingState] = useState(0)

  useEffect(() => {
    const idx = setTimeout(() => {
      setShowLoadingScreen(false)
    }, 2200)

    return () => {
      clearTimeout(idx)
    }
  }, [])

  useEffect(() => {
    const idx = setInterval(() => {
      if (loadingState < 0.9) {
        setLoadingState((prevState) => (prevState += 0.1))
      }
    }, 160)

    return () => {
      clearInterval(idx)
    }
  }, [loadingState])

  return (
    <>
      <AnimatePresence>
        {showLoadingScreen && hero.showLoadingAnimation ? (
          <Screen
            initial={{ opacity: 0, y: 5, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -4.5 }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              damping: 18,
              stiffness: 90,
              bounce: 0.8,
            }}
          >
            <AppleLogo />
            <OuterBar layout>
              <InnerBar
                layout
                animate={{
                  width: isDesktop ? loadingState * 100 : loadingState * 80,
                }}
              />
            </OuterBar>
          </Screen>
        ) : (
          <picture>
            {/* <source
              srcSet={hero.laptopInnerImage.split('.')[0] + '.webp'}
              type='image/webp'
            /> */}
            <LaptopInnerImage
              src={hero.laptopInnerImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: 'spring',
                damping: 12,
                stiffness: 90,
                bounce: 0.8,
              }}
              alt='Inside laptop'
            />
          </picture>
        )}
      </AnimatePresence>
    </>
  )
}

export default memo(LoadingScreen)

// Styles
const Screen = styled(m.div)`
  /* position: absolute;
  top: 13.2%;
  left: 14%;
  right: 16%;
  bottom: 25%;
  background: #000f;
  transform: rotate(-2.35deg);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  position: absolute;
  top: 14%;
  left: 15%;
  right: 39%;
  bottom: 46%;
  background: #161616;
  transform: rotate(-5.35deg);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border: 1px solid red; */
`

const LaptopInnerImage = styled(m.img)`
  /* width: 73%;
  position: absolute;
  top: 8%;
  left: 13%;
  right: 16%;
  bottom: 25%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center; */
  width: 100%;
  position: absolute;
  top: -18%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AppleLogo = styled(FaApple)`
  font-size: 3.6rem;
  color: #fff;
  margin-top: 10px;
  margin-bottom: 30px;

  @media (min-width: 1300px) {
    font-size: 6.2rem;
    margin-bottom: 40px;
  }
`

const OuterBar = styled(m.div)`
  width: 80px;
  height: 8px;
  background: #474747;
  border-radius: 30px;
  position: relative;

  @media (min-width: 1300px) {
    width: 100px;
  }
`

const InnerBar = styled(m.div)`
  height: 8px;
  background: #fff;
  border-radius: 30px;
  position: absolute;
`
