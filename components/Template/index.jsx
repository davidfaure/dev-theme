import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { LazyMotion, domAnimation, m } from 'framer-motion'

import Prism from 'prismjs'

import { template } from '../../data'

import { LanguageContext } from '../../context/LanguageContext'
import { ThemeContext } from '../../context/ThemeContext'

import hyperImg from '../../public/images/hyper.png'
import Sparkles from '../Hero/Sparkles'

const Template = () => {
  const { lang } = React.useContext(LanguageContext)
  const { darkMode } = React.useContext(ThemeContext)

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll()
    }
  }, [])
  return (
    <Wrapper>
      <LazyMotion features={domAnimation}>
        <Container id='template'>
          <HeadingContainer>
            <HeadingText tabIndex={0}>{template.title}</HeadingText>
          </HeadingContainer>
          <ImageWrapper>
            <Image
              src={hyperImg}
              alt='hyper'
              placeholder='blur'
              layout='fill'
              className='hyper-image'
            />
          </ImageWrapper>
          <Content>
            <HeadingWrapper>
              <HeadingInfoTitle darkMode={darkMode}>
                {template[lang].headingText}
              </HeadingInfoTitle>
              <ButtonContainer>
                <Button whileHover={{ y: -2 }} whileTap={{ y: 1 }}>
                  <a
                    href={template[lang].githubLink}
                    target='_blank'
                    rel='noreferrer'
                    tabIndex={-1}
                  >
                    {template[lang].githubButton}
                  </a>
                </Button>
                <Sparkles>
                  <ButtonNpm whileHover={{ y: -2 }} whileTap={{ y: 1 }}>
                    <a
                      href={template[lang].npmLink}
                      target='_blank'
                      rel='noreferrer'
                      tabIndex={-1}
                    >
                      {template[lang].npmButton}
                    </a>
                  </ButtonNpm>
                </Sparkles>
              </ButtonContainer>
            </HeadingWrapper>
            <TextWrapper>
              <Description
                dangerouslySetInnerHTML={{ __html: template[lang].infoText }}
              />
              <pre className='language-javascript'>
                <code>{template[lang].codeText}</code>
              </pre>
              <Description
                dangerouslySetInnerHTML={{
                  __html: template[lang].descriptionText,
                }}
              />
            </TextWrapper>
          </Content>
        </Container>
      </LazyMotion>
    </Wrapper>
  )
}

export default Template

const Wrapper = styled.section`
  position: relative;
  z-index: 110;
  background: var(--backgroundColor);
  overflow: hidden;
`

const Container = styled.div`
  padding: 60px 20px 0px;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`

const HeadingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`

const HeadingText = styled.h2`
  font-size: 5rem;
  text-align: center;
  margin-bottom: 40px;
  background: var(--headingColor);
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
      background: var(--headingColor);
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

const ImageWrapper = styled.div`
  position: relative;
  height: 644px;
  width: 1073px;
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
    background: ${(props) =>
      props.darkMode &&
      'radial-gradient(circle farthest-corner at left center, hsla(195, 92%, 90%, 1) 0%,hsla(225, 98%, 90%, 1) 110%)'};
    filter: blur(20px);
    z-index: -1;
  }

  .hyper-image {
    border-radius: 10px;
  }

  @media (max-width: 1100px) {
    width: 550px;
    height: 344px;
  }

  @media (max-width: 550px) {
    width: 370px;
    height: 254px;

    .hyper-image {
      border-radius: 5px;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  /* gap: 40px; */
  z-index: 100;

  pre {
    align-self: center;
    background-color: #000;
    padding: 16px;
    border-radius: 4px;
    overflow: auto;
    font-size: 1.5rem;
    /* margin-bottom: 4.1rem; */
    padding: 3.7rem 1rem 5.6rem 1rem;
    border-radius: 12px;
    overflow: hidden;
    background-image: url('./images/macButton.png');
    background-repeat: no-repeat;
    background-size: 44px 10px;
    background-position: 10px 10px;

    @media (max-width: 500px) {
      font-size: 0.8rem;
    }

    @media (max-width: 620px) {
      font-size: 1rem;
    }
  }
`

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 80%;
  margin: 100px 0px 25px 0px;

  @media (max-width: 1110px) {
    flex-direction: column;
  }
`

const HeadingInfoTitle = styled.h3`
  font-size: 3rem;
  margin: 0;
  overflow-wrap: break-word;
  hyphens: auto;
  margin: 10px 10px 10px 0px;
  color: var(--textColor);

  @media (max-width: 1110px) {
    margin: 10px 10px 20px 0px;
  }

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`

const ButtonContainer = styled(m.div)`
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Button = styled(m.button)`
  border: none;
  font-size: 1.8rem;
  border-radius: 5px;
  display: flex;
  background: hsl(225, 100%, 60%);
  color: hsl(225, 100%, 98%);
  justify-content: center;
  align-items: center;
  padding: 16px 30px;
  font-weight: 600;
  margin-right: 25px;
  will-change: transform;
  cursor: pointer;
  filter: drop-shadow(0 0 0.75rem hsla(225, 98%, 64%, 0.4));

  & a {
    color: hsl(225, 100%, 98%);
    display: flex;
    align-items: center;
  }

  &:focus {
    outline-color: hsla(225, 98%, 54%, 1);
  }

  @media (max-width: 500px) {
    margin-right: 0px;
    margin-bottom: 2rem;
    width: 220px;
  }
`

const ButtonNpm = styled(m.button)`
  border: none;
  font-size: 1.8rem;
  border-radius: 5px;
  display: flex;
  background: hsl(123, 65%, 42%);
  color: hsl(225, 100%, 98%);
  justify-content: center;
  align-items: center;
  padding: 16px 30px;
  font-weight: 600;
  margin-right: 25px;
  will-change: transform;
  cursor: pointer;
  filter: drop-shadow(0 0 0.75rem hsla(123, 98%, 64%, 0.4));

  & a {
    color: hsl(225, 100%, 98%);
    display: flex;
    align-items: center;
  }

  &:focus {
    outline-color: hsla(123, 98%, 54%, 1);
  }

  @media (max-width: 500px) {
    margin-right: 0px;
    margin-bottom: 2rem;
    width: 220px;
  }
`

const TextWrapper = styled(m.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 80%;
`

const Description = styled.p`
  line-height: 1.8;
  font-size: 1.6rem;
  /* flex: 1 0 auto; */
  color: var(--textColor);
`
