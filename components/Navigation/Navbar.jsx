import React, { useState } from 'react'
import styled from 'styled-components'
import { AnimateSharedLayout, motion, m } from 'framer-motion'
import Link from 'next/link'

import { IoTerminal } from 'react-icons/io5'

import DarkModeToggle from './DarkModeToggle'

import { navigation } from '../../data'
import { LanguageContext } from '../../context/LanguageContext'

const Navbar = () => {
  const [idx, setIdx] = useState(null)
  const { lang, updateLanguage } = React.useContext(LanguageContext)

  return (
    <Wrapper>
      <Container>
        <LogoText>{navigation.logoText}</LogoText>
        <RightWrapper>
          <TemplateWrapper>
            <IoTerminal
              size={24}
              color={'#DBE4FF'}
              style={{ marginRight: 15 }}
            />
            <Link href='#template' passHref>
              <motion.a tabIndex={0} whileHover={{ scale: 1.05 }}>
                Template
              </motion.a>
            </Link>
            <p>|</p>
          </TemplateWrapper>
          <Socials>
            {navigation.socialMediaLinks.map((social) => (
              <SocialsItem key={social.id} whileHover={{ scale: 1.05 }}>
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
          <ChooseLanguage>
            <LanguageText
              title={'FR'}
              lang={lang}
              onClick={() => updateLanguage('FR')}
            >
              FR
            </LanguageText>
            <p>|</p>
            <LanguageText
              title={'EN'}
              lang={lang}
              onClick={() => updateLanguage('EN')}
            >
              EN
            </LanguageText>
          </ChooseLanguage>
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
    justify-content: space-space-evenly;
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
  color: hsl(225, 100%, 98%);

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
  border-radius: 5px;
  position: relative;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);

  @media (min-width: 1100px) {
    font-size: 1.8rem;
  }

  & a {
    padding: 3px 8px;
    color: hsl(225, 100%, 97%);
  }
`

const RightWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const TemplateWrapper = styled(m.div)`
  display: flex;
  align-items: center;

  & a {
    color: hsl(225, 100%, 97%);
    cursor: pointer;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 0;
  }

  & p {
    color: hsl(225, 100%, 97%);
    margin: 5px 20px;
  }
`

const ChooseLanguage = styled.div`
  display: flex;
  justify-content: space-evenly;
  & p {
    color: hsl(225, 100%, 97%);
    cursor: pointer;
    margin: 5px;
  }
`

const LanguageText = styled(m.p)`
  color: hsl(225, 100%, 97%);
  font-weight: 600;
  cursor: pointer;
  margin: 5px;
  border-bottom: ${(props) =>
    props.title === props.lang
      ? '2px solid hsl(225, 100%, 97%)'
      : '2px solid transparent'};
  }
  transition: border 0.5s;
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
  line-height: 0;

  @media (min-width: 1100px) {
    font-size: 2.4rem;
  }

    & a {
    color: hsl(225, 100%, 97%);
  }
`
