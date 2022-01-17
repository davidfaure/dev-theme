import React, { useState } from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'

import DarkModeToggle from './DarkModeToggle'

const listVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 80,
      velocity: 2,
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 80,
      staggerChildren: 0.7,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 80,
    },
  },
}

const MobileNavbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <>
      <LazyMotion features={domAnimation}>
        <Wrapper>
          <Container>
            <LogoText>John Doe</LogoText>
            <div onClick={() => setToggleDropdown((prevState) => !prevState)}>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
                <path
                  d='M 1 2 C 1 1.448 1.448 1 2 1 L 22 1 C 22.552 1 23 1.448 23 2 L 23 3 C 23 3.552 22.552 4 22 4 L 2 4 C 1.448 4 1 3.552 1 3 Z'
                  fill='var(--bubbleBig)'
                ></path>
                <path
                  d='M 1 7 C 1 6.448 1.448 6 2 6 L 17 6 C 17.552 6 18 6.448 18 7 L 18 8 C 18 8.552 17.552 9 17 9 L 2 9 C 1.448 9 1 8.552 1 8 Z'
                  fill='var(--bubbleBig)'
                ></path>
                <path
                  d='M 1 12 C 1 11.448 1.448 11 2 11 L 20 11 C 20.552 11 21 11.448 21 12 L 21 13 C 21 13.552 20.552 14 20 14 L 2 14 C 1.448 14 1 13.552 1 13 Z'
                  fill='var(--bubbleBig)'
                ></path>
                <path
                  d='M 1 17 C 1 16.448 1.448 16 2 16 L 13 16 C 13.552 16 14 16.448 14 17 L 14 18 C 14 18.552 13.552 19 13 19 L 2 19 C 1.448 19 1 18.552 1 18 Z'
                  fill='var(--bubbleBig)'
                ></path>
              </svg>
            </div>
          </Container>
        </Wrapper>
        <AnimatePresence>
          {toggleDropdown && (
            <>
              <DropdownWrapper
                initial={{ y: 300, x: '-50%' }}
                animate={{ y: 0 }}
                exit={{ y: 300 }}
                transition={{ type: 'spring', damping: 18 }}
              >
                <nav>
                  <DropdownList
                    variants={listVariants}
                    initial='hidden'
                    animate='show'
                    exit='exit'
                  >
                    <DropdownItem
                      variants={itemVariants}
                      style={{
                        borderBottom: '1px solid #fbad3c',
                        paddingBottom: '2rem',
                        marginBottom: '2rem',
                      }}
                    >
                      <DarkModeText>Change theme</DarkModeText>
                      <DarkModeToggle />
                    </DropdownItem>
                    <DropdownItem variants={itemVariants}>
                      <LinkStyled
                        href='https://github.com/nicopellerin'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Github'
                      >
                        <FiGithub
                          color='#fbad3c'
                          size={24}
                          style={{ marginRight: 15 }}
                        />{' '}
                        Github
                      </LinkStyled>
                    </DropdownItem>
                    <DropdownItem variants={itemVariants}>
                      <LinkStyled
                        href='https://twitter.com/nicopellerin_io'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Twitter'
                      >
                        <FiTwitter
                          color='#fbad3c'
                          size={24}
                          style={{ marginRight: 15 }}
                        />{' '}
                        Twitter
                      </LinkStyled>
                    </DropdownItem>
                    <DropdownItem variants={itemVariants}>
                      <LinkStyled
                        href='https://twitter.com/nicopellerin_io'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Instagram'
                      >
                        <FiInstagram
                          color='#fbad3c'
                          size={24}
                          style={{ marginRight: 15 }}
                        />{' '}
                        Instagram
                      </LinkStyled>
                    </DropdownItem>
                  </DropdownList>
                </nav>
                <CloseWrapper
                  initial={{ x: '-50%', y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ type: 'spring', damping: 18, delay: 0.1 }}
                  onClick={() => setToggleDropdown(false)}
                >
                  <FaTimes
                    style={{
                      fontSize: '2.4rem',
                      color: '#fbad3c',
                    }}
                  />
                </CloseWrapper>
              </DropdownWrapper>
              <Overlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                onClick={() => setToggleDropdown(false)}
                transition={{ type: 'spring', damping: 18, delay: 0.1 }}
              />
            </>
          )}
        </AnimatePresence>
      </LazyMotion>
    </>
  )
}

export default MobileNavbar

// Styles
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 100;

  @media (min-width: 900px) {
    display: none;
  }
`

const Container = styled.div`
  margin: 0 auto;
  padding: 30px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoText = styled.h1`
  margin: 0;
  font-size: 2.4rem;
  letter-spacing: -0.01em;
  color: #ffffff;
`

const Overlay = styled(m.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  z-index: 100;
`

const DropdownWrapper = styled(m.div)`
  position: absolute;
  width: 98%;
  max-width: 700px;
  background: #000910;
  bottom: 00px;
  left: 50%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top: 5px solid #fbad3c;
  z-index: 101;
  padding-bottom: 40px;

  @media (min-width: 600px) {
    padding-bottom: 80px;
  }
`

const DropdownList = styled(m.ul)`
  padding: 30px;
`

const DropdownItem = styled(m.li)`
  display: flex;
  font-size: 1.8rem;
  text-align: center;

  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
`

const LinkStyled = styled.a`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  letter-spacing: 1.2px;
`

const CloseWrapper = styled(m.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #112;
  position: absolute;
  top: -80px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fbad3c;
  cursor: pointer;
  z-index: 200;

  @media (min-width: 700px) {
    bottom: 340px;
  }

  @media (min-width: 500px) and (max-width: 820px) and (orientation: landscape) {
    bottom: 260px;
  }
`

const DarkModeText = styled.span`
  color: #ffffff;
  margin-right: auto;
  font-weight: 500;
  font-size: 1.6rem;
  letter-spacing: 1.1px;
`
