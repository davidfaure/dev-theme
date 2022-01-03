import React from 'react'
import styled from 'styled-components'

import ContactForm from './ContactForm'

import { contact } from '../../data'
import { LanguageContext } from '../../context/LanguageContext'

const Contact = () => {
  const { lang } = React.useContext(LanguageContext)
  return (
    <Wrapper>
      <Container id='contact'>
        <HeadingContainer>
          <HeadingText>{contact[lang].headingText}</HeadingText>
        </HeadingContainer>
        <InfoText
          dangerouslySetInnerHTML={{ __html: contact[lang].infoText }}
        />
        <ContactForm />
      </Container>
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
  background: var(--headingColor);
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
    background: var(--headingColor);
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
