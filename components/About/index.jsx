import React, { useContext } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import dynamic from 'next/dynamic'

const TechBar = dynamic(() => import('./TechBar'), { ssr: false })
import Parallax from '../Parallax'

import { ThemeContext } from '../../context/ThemeContext'

import { about } from '../../data'
import Wave2 from '../Waves/Wave2'

const About = () => {
  const { darkmode } = useContext(ThemeContext)

  return (
    <Wrapper id='about'>
      <LazyMotion features={domAnimation}>
        <Container>
          <HeadingContainer>
            <HeadingText tabIndex={0}>{about.headerText}</HeadingText>
          </HeadingContainer>
          <Content>
            <Parallax offset={10} offsetInitial={26}>
              <ProfileImageWrapper darkmode={darkmode}>
                <Image
                  src={about.profileImage}
                  alt='Profile'
                  layout='fill'
                  placeholder='blur'
                  blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAjSURBVHgB7cqhEQAACAJAdP897d6ZZQUCkc9fN/sQNESJnkgetQPh0RGf5wAAAABJRU5ErkJggg=='
                  className='profile-image'
                />
                <Blob
                  src='/images/blob.svg'
                  animate={{ rotate: [0, 5, 0], scale: [0.98, 1.03, 0.98] }}
                  transition={{
                    type: 'tween',
                    duration: 7,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  alt='Blob'
                />
              </ProfileImageWrapper>
            </Parallax>
            <div>
              <BioText dangerouslySetInnerHTML={{ __html: about.bioText }} />
              <Parallax offset={-10} offsetInitial={-10}>
                <TechBar />
              </Parallax>
            </div>
          </Content>
        </Container>
        <WaveWrapper>
          <Wave2 />
        </WaveWrapper>
      </LazyMotion>
    </Wrapper>
  )
}

export default About

// Styles
const Wrapper = styled.section`
  background: var(--backgroundColor);
  position: relative;
  z-index: 110;
  overflow: hidden;
`

const Container = styled.div`
  position: relative;
  padding: 60px 20px 140px;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding: 80px 40px 270px;
  }
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`

const HeadingText = styled.h2`
  margin-top: 0;
  font-size: 5rem;
  text-align: center;
  margin-bottom: 40px;
  background: var(--textColor);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;

  &:after {
    @media (min-width: 1024px) {
      content: '';
      position: absolute;
      left: 50%;
      width: 30%;
      height: 5px;
      background: var(--textColor);
      border-radius: 8px;
      transform: translateX(-50%);
      bottom: -20px;
    }
  }

  @media (min-width: 1024px) {
    margin-bottom: 100px;
    font-size: clamp(4rem, calc(4vw + 1rem), 5rem);
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-items: center;
  gap: 40px;
  z-index: 100;

  @media (min-width: 1024px) {
    grid-template-columns: auto auto;
  }
`

const ProfileImageWrapper = styled.div`
  position: relative;
  height: 250px;
  width: 250px;
  border: 5px solid var(--textColor);
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  left: 50%;
  transform: translateX(-50%);

  &:after {
    content: '';
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: ${(props) =>
      props.darkmode
        ? 'none'
        : 'radial-gradient(circle farthest-corner at left center, hsla(195, 92%, 90%, 1) 0%,hsla(288, 98%, 90%, 1) 110%)'}; */
    filter: blur(20px);
    border-radius: 50%;
    z-index: -1;
  }

  .profile-image {
    border-radius: 50%;
  }

  @media (min-width: 1100px) {
    border: 10px solid var(--textColor);
    width: 350px;
    height: 350px;
  }
`

const Blob = styled(m.img)`
  display: block;
  position: absolute;
  left: -30%;
  top: -8%;
  width: 360px;
  z-index: 2;

  @media (min-width: 1024px) {
    left: -60%;
    top: -30%;
    width: auto;
  }
`

const BioText = styled.div`
  max-width: 100ch;
  margin-bottom: 30px;
  color: var(--textColor);

  & p {
    line-height: 1.6;
    font-size: 1.6rem;

    @media (min-width: 1024px) {
      font-size: 1.8rem;
    }
  }
`

const WaveWrapper = styled(m.div)`
  position: absolute;
  bottom: -4px;
  left: -3%;
  right: -3%;
  width: 106%;

  @media (min-width: 1024px) {
    bottom: -20px;
  }
`
