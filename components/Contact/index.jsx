import React from 'react'
import styled from 'styled-components'

import { m, LazyMotion, domAnimation } from 'framer-motion'

import ContactForm from './ContactForm'

import { contact } from '../../data'
import { ThemeContext } from '../../context/ThemeContext'

const Contact = () => {
  const { darkmode } = React.useContext(ThemeContext)
  return (
    <Wrapper>
      <LazyMotion features={domAnimation}>
        <Container id='contact'>
          <HeadingContainer>
            <HeadingText>{contact.headingText}</HeadingText>
          </HeadingContainer>
          <InfoText dangerouslySetInnerHTML={{ __html: contact.infoText }} />
          <FormWrapper>
            <Picture>
              <HelloImage
                animate={{ y: [0, 10, 0] }}
                style={{ position: 'relative' }}
                transition={{
                  type: 'tween',
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 4,
                }}
                src={
                  darkmode
                    ? '/images/blackHello.png'
                    : '/images/yellowHello.png'
                }
                alt='Hello'
                loading='lazy'
              />
            </Picture>
            <ContactForm />
          </FormWrapper>
        </Container>
      </LazyMotion>
    </Wrapper>
  )
}

export default Contact

// Styles
const Wrapper = styled.div`
  background: var(--backgroundColor);
  position: relative;
  z-index: 100;
  margin-top: 40px;

  @media (min-width: 1600px) {
    margin-top: 70px;
  }
`

const Container = styled.div`
  padding: 90px 20px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1340px) {
    padding: 120px 20px;
    max-width: 1200px;
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
  font-size: 4.2rem;
  text-align: center;
  margin-bottom: 60px;
  background: var(--textColor);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -20px;
    width: 30%;
    height: 5px;
    background: var(--textColor);
    border-radius: 8px;
    transform: translateX(-50%);
  }

  @media (min-width: 1024px) {
    font-size: clamp(4rem, calc(4vw + 1rem), 5rem);
  }
`

const InfoText = styled.div`
  margin-bottom: 80px;
  max-width: 160ch;
  margin: 0 auto;
  margin-bottom: 60px;

  & p {
    line-height: 1.6;
    color: var(--textColor);
    text-align: center;
    font-size: 1.6rem;

    @media (min-width: 1024px) {
      font-size: 1.8rem;
    }
  }
`

const FormWrapper = styled.div`
  display: grid;
  align-items: center;
  padding: 0;
  max-width: 100%;

  @media (min-width: 1340px) {
    gap: 8rem;
    grid-template-columns: 1fr 2fr;
  }
`

const HelloImage = styled(m.img)`
  display: none;

  @media (min-width: 1340px) {
    display: block;
    padding-bottom: 8rem;
    max-width: 100%;
  }
`

const Picture = styled.picture``
