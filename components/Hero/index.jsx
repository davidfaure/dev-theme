import React, { useState, useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import { useMedia } from 'react-use-media'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import dynamic from 'next/dynamic'

import ViewMoreBar from './ViewMoreBar'
import Parallax from '../Parallax'
const Background = dynamic(() => import('./Background'), { ssr: false })
import LoadingScreen from './LoadingScreen'
import Wave from '../Waves/Wave'

// import bg from '../../public/images/hero-background.png'
import bg from '../../public/images/hero-background-blue.png'

import { ThemeContext } from '../../context/ThemeContext'

import { hero } from '../../data'
import { Canvas } from '@react-three/fiber'
import { FaCheck, FaDownload, FaSpinner } from 'react-icons/fa'
import { LanguageContext } from '../../context/LanguageContext'
import Sparkles from './Sparkles'

const Hero = () => {
  const isDesktop = useMedia({
    minWidth: 800,
  })

  const [isDownloading, setIsDownloading] = useState(false)
  const [isDownloaded, setIsDownloaded] = useState(false)

  const { darkMode } = useContext(ThemeContext)
  const { lang } = useContext(LanguageContext)

  const [hasLoaded, setHasLoaded] = useState(false)

  React.useEffect(() => {
    if (isDownloading) {
      setTimeout(() => {
        setIsDownloading(false)
        setIsDownloaded(true)
      }, 2000)
    }
  }, [isDownloading])

  return (
    <Wrapper darkMode={darkMode}>
      <LazyMotion features={domAnimation}>
        <Image
          src={bg}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          alt='Background'
        />
        <Container>
          <Parallax offset={isDesktop ? 10 : 0} offsetInitial={50}>
            <HeadingText
              initial={{ opacity: 0, y: 180 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                damping: 18,
                stiffness: 80,
                bounce: 0.9,
                delay: 0.15,
              }}
              dangerouslySetInnerHTML={{ __html: hero[lang].headingText }}
            />
            {!isDownloaded ? (
              <Sparkles>
                <Button
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 1 }}
                  onClick={() => setIsDownloading(true)}
                >
                  <a
                    href={
                      lang === 'FR'
                        ? '/CV/David_Faure_Developpeur_Full_Stack.pdf'
                        : '/CV/David_Faure_Developpeur_Full_Stack_EN.pdf'
                    }
                    aria-label='CV'
                    download
                    target='_blank'
                    rel='noreferrer'
                  >
                    {hero[lang].downloadText}{' '}
                    {!isDownloading ? (
                      <FaDownload style={{ marginLeft: 10 }} />
                    ) : (
                      <FaSpinner style={{ marginLeft: 10 }} />
                    )}
                  </a>
                </Button>
              </Sparkles>
            ) : (
              <Button>
                {hero[lang].downloadedText}{' '}
                <FaCheck style={{ marginLeft: 10 }} />
              </Button>
            )}
          </Parallax>
          {isDesktop ? (
            <Parallax offset={-30} offsetInitial={-30}>
              <m.div
                animate={{ scale: [1, 0.95, 1] }}
                transition={{
                  type: 'spring',
                  bounce: 0.8,
                }}
                onAnimationComplete={() => setHasLoaded(true)}
              >
                <LaptopImageWrapper
                  animate={{ y: [0, 5, 0] }}
                  style={{ position: 'relative' }}
                  transition={{
                    type: 'tween',
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 4,
                  }}
                >
                  <Picture>
                    <source srcSet='/images/macbook.webp' type='image/webp' />
                    <LaptopImage
                      initial={{ opacity: 0, y: 180, rotate: 7 }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      transition={{
                        type: 'spring',
                        damping: 18,
                        stiffness: 90,
                        bounce: 0.8,
                        delay: 0.25,
                      }}
                      src='/images/macbook.png'
                      alt='Laptop'
                      loading='lazy'
                    />
                  </Picture>
                  {hasLoaded && <LoadingScreen />}
                </LaptopImageWrapper>
              </m.div>
            </Parallax>
          ) : null}
        </Container>
        <Background />
        <ViewMoreBar />
        <WaveWrapper>
          <Wave
            initial={{ y: 60 }}
            animate={{ y: 0 }}
            transition={{
              type: 'spring',
              damping: 12,
              stiffness: 100,
              bounce: 0.8,
            }}
            alt='Wave'
          />
        </WaveWrapper>
      </LazyMotion>
    </Wrapper>
  )
}

export default Hero

// Styles

const Button = styled(m.button)`
  border: none;
  padding: 0.9em 1.3em;
  margin-top: 20px;
  font-size: 1.8rem;
  border-radius: 5px;
  background: hsl(225, 100%, 40%);
  color: hsl(225, 100%, 98%);
  font-weight: 600;
  display: flex;
  cursor: pointer;
  will-change: transform;
  filter: drop-shadow(0 0 0.75rem hsla(225, 98%, 44%, 0.4));
  width: 220px;
  justify-content: space-around;

  @media (max-width: 500px) {
    width: 100%;
  }

  & a {
    color: hsl(225, 100%, 98%);
  }

  &:focus {
    border: 1px solid transparent;
    outline-color: hsla(225, 98%, 54%, 1);
    outline-offset: 1px;
  }
`

const Wrapper = styled.section`
  height: 100%;
  background: linear-gradient(
    45deg,
    hsla(225, 100%, 26%, 1),
    hsla(225, 100%, 36%, 1)
  );
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    background: ${(props) =>
      props.darkMode
        ? 'linear-gradient(145deg, hsla(225, 100%, 26%, 0.2), hsla(225, 100%, 16%, 0.3))'
        : 'none'};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const Container = styled.div`
  position: relative;
  z-index: 90;
  display: grid;
  place-content: center;
  align-items: center;
  height: 94%;
  grid-template-columns: 1fr;
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
    height: 92%;
  }

  @media (min-width: 900px) {
    padding: 0 40px;
    gap: 40px;
  }

  @media (min-width: 1400px) {
    height: 86%;
  }

  @media (min-width: 500px) and (max-width: 820px) and (orientation: landscape) {
    height: 100%;
  }
`

const WaveWrapper = styled(m.div)`
  position: absolute;
  bottom: -15px;
  left: -3%;
  right: -3%;
  z-index: 102;
  width: 106%;
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

const HeadingText = styled(m.h2)`
  margin: 0;
  font-size: max(4.8rem, 8vw);
  line-height: 1.12;
  max-width: 20ch;
  background: radial-gradient(
    circle farthest-corner at left center,
    hsla(195, 100%, 90%, 1) -50%,
    hsla(225, 100%, 95%, 1) 50%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 5px hsla(225, 98%, 90%, 0.1));

  @media (min-width: 800px) {
    font-size: clamp(5rem, calc(4vw + 1rem), 6rem);
  }
`

const AnimBlur = keyframes`
  60% {
    opacity: 0
  }
 100% {
  opacity: 1
 }
`

const LaptopImageWrapper = styled(m.div)`
  &:before {
    opacity: 0;
    animation: ${AnimBlur} 1.3s 1s forwards;
    content: '';
    position: absolute;
    top: 0px;
    left: 40px;
    right: 40px;
    height: 100%;
    background: radial-gradient(
      circle farthest-corner at left center,
      hsla(195, 92%, 90%, 0.16) 0%,
      hsla(225, 98%, 90%, 0.16) 110%
    );
    filter: blur(50px);
    z-index: -1;
    transform: rotate(-2deg);
  }
`

const LaptopImage = styled(m.img)`
  display: none;

  @media (min-width: 800px) {
    display: block;
    max-width: 100%;
  }
`

const Picture = styled.picture``

// const IpadImage = styled(motion.img)`
//   display: block;
//   max-width: 365px;
//   position: absolute;
//   bottom: -460px;
//   left: 50%;

//   @media (min-width: 900px) {
//     display: none;
//   }
// `
