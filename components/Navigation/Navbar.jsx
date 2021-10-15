import React, { useState } from 'react'
import styled from 'styled-components'
import { AnimateSharedLayout, motion } from 'framer-motion'
import Link from 'next/link'

import DarkModeToggle from './DarkModeToggle'

import { navigation } from '../../data'

const Navbar = () => {
  const [idx, setIdx] = useState(null)

  return (
    <Wrapper>
      <Container>
        <LogoText>{navigation.logoText}</LogoText>
        <nav>
          <Menu onMouseLeave={() => setIdx(null)}>
            <AnimateSharedLayout>
              {navigation.menu.map((item, index) => (
                <MenuItem key={item.id} onMouseOver={() => setIdx(index)}>
                  <Link href={item.link}>
                    <a tabIndex={0}>
                      {item.label}
                      {index === idx && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layoutId='menuItem'
                          style={{
                            position: 'absolute',
                            width: '100%',
                            height: '3px',
                            background: 'var(--textColor)',
                            bottom: '-12px',
                            borderRadius: '5px',
                          }}
                        />
                      )}
                    </a>
                  </Link>
                </MenuItem>
              ))}
            </AnimateSharedLayout>
          </Menu>
        </nav>
        <RightWrapper>
          <Socials>
            {navigation.socialMediaLinks.map((social) => (
              <SocialsItem key={social.id} whileHover={{ scale: 1.03 }}>
                <a
                  href={social.link}
                  aria-label={social.label}
                  target='_blank'
                  rel='noreferrer'
                >
                  {social.icon}
                </a>
              </SocialsItem>
            ))}
          </Socials>
          <DarkModeToggle />
        </RightWrapper>
      </Container>
    </Wrapper>
  )
}

export default Navbar

// Styles
const Wrapper = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 1000;
    padding: 30px 40px;
    max-width: 1400px;
    width: 100%;
  }
`

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: 'Space Grotesk', sans-serif;
`

const LogoText = styled.h1`
  margin: 0;
  font-size: 2.8rem;
  letter-spacing: -0.01em;
  color: hsl(288, 100%, 98%);

  @media (min-width: 1100px) {
    font-size: 3rem;
  }
`

const Menu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;

  & li:not(:last-child) {
    margin-right: 40px;
  }
`

const MenuItem = styled.li`
  font-size: 1.6rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 5px;
  position: relative;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);

  @media (min-width: 1100px) {
    font-size: 1.8rem;
  }

  & a {
    padding: 3px 8px;
    color: hsl(288, 100%, 97%);
  }
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Socials = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;

  & li:not(:last-child) {
    margin-right: 24px;
  }
`

const SocialsItem = styled(motion.li)`
  font-size: 2.2rem;
  cursor: pointer;

  @media (min-width: 1100px) {
    font-size: 2.4rem;
  }

    & a {
    color: hsl(288, 100%, 97%);
  }
`
