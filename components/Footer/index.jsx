import React from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { footer, navigation } from '../../data'
import Notifications from '../Notification'

import Link from 'next/link'

const Footer = () => {
  React.useEffect(() => {
    toast(<Notifications />, { position: toast.POSITION.BOTTOM_RIGHT })
  })
  return (
    <Wrapper>
      <Link href='/' passHref>
        <LogoText>{navigation.logoText}</LogoText>
      </Link>

      <Copyright>
        &copy;{new Date().getFullYear()} {footer.text}
      </Copyright>
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
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding: 0px 40px;
`

// Styles
const Copyright = styled.footer`
  text-align: center;
  padding: 40px 0;
  color: var(--textColor);
  font-size: 1.6rem;
  font-weight: 500;
  background: var(--backgroundColor);
  z-index: 10;
  position: relative;

  @media (max-width: 600px) {
    padding: 20px 0;
  }
`

const Socials = styled.ul`
  padding: 40px 0;
  margin: 0;
  list-style: none;
  display: flex;

  & li:not(:last-child) {
    margin-right: 24px;
  }
  @media (max-width: 600px) {
    padding: 10px 0;
  }
`

const SocialsItem = styled(motion.li)`
  font-size: 2.2rem;
  cursor: pointer;

  @media (min-width: 1100px) {
    font-size: 2.4rem;
  }

    & a {
    color: var(--textColor);
  }
`
const LogoText = styled.h1`
  margin: 0;
  font-size: 2.8rem;
  letter-spacing: -0.01em;
  color: var(--textColor);
  cursor: pointer;

  @media (min-width: 1100px) {
    font-size: 3rem;
  }
`
